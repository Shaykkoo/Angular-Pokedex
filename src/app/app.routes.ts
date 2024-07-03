import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import {LoginComponent} from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { FavoritesComponent } from './favorites/favorites.component';


export const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'favorites', component: FavoritesComponent},
];