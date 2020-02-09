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
    new Recipe('Classic Goulash',
      'super good',
      'https://images.media-allrecipes.com/userphotos/720x405/1108799.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),

      new Recipe('Lemon-Blueberry Pancakes',
      'IronChefLaurie\'s favoirte',
      'https://images.media-allrecipes.com/userphotos/720x405/7383694.jpg',
      [
        new Ingredient('flour', 1),
        new Ingredient('egg', 2),
        new Ingredient('lemon', 2)
      ]),
      new Recipe('Italian Wedding Soup',
        'Happy wedding',
        'https://images.media-allrecipes.com/userphotos/720x405/6414064.jpg',
        [
          new Ingredient('pasta', 1),
          new Ingredient('chicken broth', 1),
          new Ingredient('spinach', 6)
        ]),

        new Recipe('Smothered Cabbage',
        'Sandra Garth',
        'https://images.media-allrecipes.com/userphotos/720x405/6062348.jpg',
        [
          new Ingredient('cabbage', 1),
          new Ingredient('pepper', 1),
          new Ingredient('chicken', 2)
        ]),

        new Recipe('Blooming Onion and Dipping Sauce',
        'Jackie Smith',
        'https://images.media-allrecipes.com/userphotos/720x405/5450287.jpg',
        [
          new Ingredient('flour', 1),
          new Ingredient('pepper', 1),
          new Ingredient('salt', 2)
        ]),

        new Recipe('Beef Pot Pie III',
        'Stephanie',
        'https://images.media-allrecipes.com/userphotos/720x405/2987719.jpg',
        [
          new Ingredient('flour', 1),
          new Ingredient('potato', 2),
          new Ingredient('egg', 2)
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
