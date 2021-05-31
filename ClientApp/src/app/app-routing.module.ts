import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'recipes/add',  component: AddRecipeComponent},
    { path: 'recipes/:id', component: RecipeDetailsComponent },
    { path: 'recipes', component: RecipesComponent},
    { path: 'favorites', component: FavoritesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
