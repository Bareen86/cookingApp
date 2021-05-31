import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() image: string;
  @Input() alt: string;
  @Input() title: string;
  @Input() text: string;
  @Input() cookingTime: string;
  @Input() peopleCount: string;
  @Input() tag1: string;
  @Input() tag2: string;
  @Input() tag3: string;
  @Input() starNumbers: string;
  @Input() likeNumbers: string;

  chooseFavourite: boolean = true;
  pressLike: boolean = true;

  isStar() {
    this.chooseFavourite = !this.chooseFavourite;
  }
  
  isLike() {
    this.pressLike = !this.pressLike;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
