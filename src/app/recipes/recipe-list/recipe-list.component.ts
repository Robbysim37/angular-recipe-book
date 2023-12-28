import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe("A test Recipe","This is a test","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQinDBJx3QMgwn1B5bB9eTjQvhsPUEP5OYw&usqp=CAU")
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
