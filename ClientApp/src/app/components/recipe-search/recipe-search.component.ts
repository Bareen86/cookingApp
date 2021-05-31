import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
  tags: string[] = ["Мясо", "Деликатесы", "Пироги", "Рыба"];

  constructor() { }

  ngOnInit(): void {
  }

}
