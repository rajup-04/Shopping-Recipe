import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
    
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10),
        new Ingredient('Ginger', 2),
      ];
      updatedIngredient =  new EventEmitter<Ingredient[]>();

      getIngredinet(){
        return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.updatedIngredient.emit(this.ingredients.slice());
      }
    
      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients)
        this.updatedIngredient.emit(this.ingredients.slice());
      }
}