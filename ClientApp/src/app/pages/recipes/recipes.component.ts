import { Component, OnInit } from '@angular/core';
import { CategoryCard } from '../main/category-card';
import { RecipeCard } from './recipe-card';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
    readonly recipesCards: RecipeCard[] = [
        {
            image: 'strawberry',
            title: 'Клубничная панна-котта',
            text: 'Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.',
            alt: 'strawberryRecipe',
            cookingTime: '35  мин',
            peopleCount: '5 персон',
            tag1: 'десерты',
            tag2: 'клубника',
            tag3: 'сливки',
            starNumbers: '10',
            likeNumbers: '8',
        },
        {
            image: 'meatMeatballs',
            title: 'Мясные фрикадельки',
            text: 'Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких. ',
            alt: 'meatMeatballsRecipe',
            cookingTime: '90  мин',
            peopleCount: '4 персоны',
            tag1: 'вторые блюда',
            tag2: 'мясо',
            tag3: 'совевый ',
            starNumbers: '4',
            likeNumbers: '7',
        },
        {
            image: 'pancakes',
            title: 'Панкейки',
            text: 'Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке...',
            alt: 'pancakesRecipe',
            cookingTime: '40  мин',
            peopleCount: '3 персон',
            tag1: 'десерты',
            tag2: 'завтрак',
            tag3: 'блины',
            starNumbers: '25',
            likeNumbers: '7',
        },
        {
            image: 'icecreamWoShugar',
            title: 'Полезное мороженое без сахара',
            text: 'Йогуртовое мороженое сочетает в себе нежный вкус и низкую калорийность, что будет особенно актуально для сладкоежек, соблюдающих диету.',
            alt: 'icecreamWoShugarRecipe',
            cookingTime: '35  мин',
            peopleCount: '2 персоны',
            tag1: 'десерты',
            tag2: 'вишня',
            tag3: 'мороженное',
            starNumbers: '4',
            likeNumbers: '7',
        },
    ];
    readonly categoryCards: CategoryCard[] = [
        { icon: 'ic-menu', title: 'Простые блюда', text: '', alt: 'menu'},
        { icon: 'vector', title: 'Детское', text: '', alt: 'childrenMenu'},
        { icon: 'chefMenu', title: 'От шеф-повара', text: '', alt: 'chefMenu'},
        { icon: 'celebrationMenu', title: 'На Праздник', text: '', alt: 'celebrationMenu'},
    ];
    constructor() {}

    ngOnInit(): void {}
}
