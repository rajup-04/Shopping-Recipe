import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService){
      this.ingredients = this.shoppingListService.getIngredinet();
      this.shoppingListService.updatedIngredient.subscribe((updatedIngredient: Ingredient[])=>{
        this.ingredients = updatedIngredient
      })
  }
  


}
