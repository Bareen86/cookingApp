import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient-card';

@Component({
    selector: 'app-add-recipe',
    templateUrl: './add-recipe.component.html',
    styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    public ingredientList: Ingredient[] = [];

    addIngredient() {
        this.ingredientList.push({ title: '', description: '', index: this.ingredientList.length });
    }

    removeIngredient(index: number) {
        if (index > -1) {
            this.ingredientList.splice(index, 1);
        }
    }
}
