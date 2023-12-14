import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] =[
        new Recipe('Gulab Jamun', 'Gulab jamun are soft delicious berry sized balls made with milk solids, flour & a leavening agent. These are soaked in rose flavored sugar syrup & enjoyed. The word “Gulab” translates to rose in Hindi & “jamun” to berry. So gulab jamun are berry sized balls dunked in rose flavored sugar syrup', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWeW4CWXDSHP_ZLJ7sSt7QiM4-LE-4ZBkAolbvLqEfw&s', [
          new Ingredient('Milk Powder', 5),
          new Ingredient('Sugar', 2),
          new Ingredient('Oil', 1),

        ]),
        new Recipe('Lasagna', 'Lasagna is a type of pasta, possibly one of the oldest types, made of very wide, flat sheets. Either term can also refer to an Italian dish made of stacked layers of lasagna alternating with fillings such as ragù, béchamel sauce, vegetables, cheeses, and seasonings and spices','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WY-TK5lheE2vP1onpvH2Eujwq8p1VYM-pQ&usqp=CAU',[
          new Ingredient('Bread', 10),
          new Ingredient('Cheese', 2),
          new Ingredient('Pasta sauce', 2),

        ]),
        new Recipe('Spaghetti', 'Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat, water, and sometimes enriched with vitamins and minerals. Italian spaghetti is typically made from durum-wheat semolina','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uhVug6ohl_A7f9FFaIrtmWwMWL-n2OOEVw&usqp=CAU',[
          new Ingredient('Vermicelli', 10),
          new Ingredient('Salt', 1),
          new Ingredient('Chilli', 2),

        ])
      ];

      constructor(private slService: ShoppingListService){
        
      }

      getRecipes(){
        return this.recipes.slice();
      }

     addIngredientsToShoppingList(ingredients : Ingredient[]){
      this.slService.addIngredients(ingredients);
     }

     getRecipe(id: number){
      return this.recipes.slice()[id];
     }

            
}