import { Component, OnInit } from '@angular/core';
import { CategoryCard } from './category-card';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
    readonly categoryCards: CategoryCard[] = [
        { icon: 'ic-menu', title: 'Простые блюда', text: 'Время приготвления таких блюд не более 1 часа', alt: 'menu'},
        { icon: 'vector', title: 'Детское', text: 'Самые полезные блюда которые можно детям любого возраста', alt: 'childrenMenu'},
        { icon: 'chefMenu', title: 'От шеф-повара', text: 'Требуют умения, времени и терпения, зато как в ресторане', alt: 'chefMenu'},
        { icon: 'celebrationMenu', title: 'На Праздник', text: 'Чем удивить гостей, чтобы все были сыты за праздничным столом', alt: 'celebrationMenu'},
    ];
    constructor() {}

    ngOnInit(): void {}
}
