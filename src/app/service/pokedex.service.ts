import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from "@angular/common/http";
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemonList(limit = 20): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}`).pipe(
      catchError((error: HttpErrorResponse ) => {
        console.error('Erreur lors de la récupération de la liste des Pokémon', error);
        return throwError(error); // Retourner l'erreur pour le gestionnaire d'erreur suivant
      }),
      map((response: any) => response.results)
    );
  }

  getPokemonDetails(nameOrId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${nameOrId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`Erreur lors de la récupération des détails du Pokémon ${nameOrId}`, error);
        return throwError(error); // Retourner l'erreur pour le gestionnaire d'erreur suivant
      })
    );
  }
}
