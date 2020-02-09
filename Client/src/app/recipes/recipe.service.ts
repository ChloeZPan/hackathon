import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Moo Goo Gai Pan',
    'Zeyi\'s favoirte',
    'https://lh3.googleusercontent.com/proxy/t4QdQU_tNH1TFcQ7TIsVPjuACXN2QrbdVe46S0jqbHscVfeGU5_Y7xslwTsfwFkTJizPBvZuZEQtYcCwNe9Pokd9t8VMMbStRPubmLEXdSVnQrW4JhaFv4J-jwPFyILM7Io3GbDC8a59siVMEFEuHZgiYi64OrfC8Ldvzls2vdQXr-LREvf7jHj18GeohJjiBBhmpZf05Ump',
    [
      new Ingredient('Mushroom', 2),
      new Ingredient('Chicken', 1)
    ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])


  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
