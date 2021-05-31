import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './pages/main/main.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginDialogComponent,
        RegistrationDialogComponent,
        HeaderComponent,
        MainComponent,
        RecipesComponent,
        FavoritesComponent,
        FooterComponent,
        CategoryCardComponent,
        RecipeSearchComponent,
        RecipeCardComponent,
        AddRecipeComponent,
        RecipeDetailsComponent,
    ],
    entryComponents: [LoginDialogComponent, RegistrationDialogComponent],
    imports: [
        BrowserModule,
        MatSliderModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
