import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  selectedRecipe: Recipe
  id: number;
  editMode =  false;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
    })
  }



}
