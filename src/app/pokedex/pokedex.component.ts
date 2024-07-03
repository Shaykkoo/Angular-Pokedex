import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../service/pokedex.service';
import { CommonModule } from '@angular/common';
import { RouterLink, } from "@angular/router";
import { FavoriteService } from '../service/favorites.service';




@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports:  [ CommonModule, RouterLink ],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent implements OnInit {
  pokemonList: any[] = [];
  favorites: Set<number> = new Set<number>();

  constructor(private pokedexService: PokedexService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(): void {
    this.pokedexService.getPokemonList().subscribe(
      (response: any[]) => {
        response.forEach(pokemon => {
          this.pokedexService.getPokemonDetails(pokemon.name).subscribe(
            (details: any) => {
              pokemon.id = details.id;
            },
            (error) => {
              console.error(`Erreur lors de la récupération des détails du Pokémon ${pokemon.name}`, error);
            }
          );
        });

        this.pokemonList = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération de la liste des Pokémon', error);
      }
    );
  }

  toggleFavorite(id: number): void {
    if (this.favoriteService.isFavorite(id)) {
      this.favoriteService.removeFromFavorites(id);
    } else {
      this.favoriteService.addToFavorites(id);
    }
  }

  isFavorite(id: number): boolean {
    return this.favoriteService.isFavorite(id);
  }

  getFavorites(): number[] {
    return this.favoriteService.getFavorites();
  }
}
