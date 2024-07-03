import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../service/favorites.service';
import { PokedexService } from '../service/pokedex.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  favoritePokemon: any[] = [];

  constructor(private favoriteService: FavoriteService, private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    const favoriteIds = this.favoriteService.getFavorites();
    favoriteIds.forEach(id => {
      this.pokedexService.getPokemonDetails(id.toString()).subscribe(
        (pokemon: any) => {
          this.favoritePokemon.push(pokemon);
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails du Pokémon favori', error);
        }
      );
    });
  }

  removeFromFavorites(id: number): void {
    this.favoriteService.removeFromFavorites(id);
    this.favoritePokemon = this.favoritePokemon.filter(pokemon => pokemon.id !== id);
  }
}
