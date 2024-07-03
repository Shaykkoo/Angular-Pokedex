import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteIds: Set<number> = new Set<number>();

  constructor() {}

  addToFavorites(id: number): void {
    this.favoriteIds.add(id);
  }

  removeFromFavorites(id: number): void {
    this.favoriteIds.delete(id);
  }

  getFavorites(): number[] {
    return Array.from(this.favoriteIds);
  }

  isFavorite(id: number): boolean {
    return this.favoriteIds.has(id);
  }
}
