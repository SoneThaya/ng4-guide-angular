import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome',
      'https://cdn.pixabay.com/photo/2019/03/25/20/20/schnitzel-4081269_960_720.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else do you need to say?',
      'https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
