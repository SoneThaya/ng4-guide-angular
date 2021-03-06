import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  // CREATE VARIABLE FOR ID
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  // retrieve id with ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    // get id from params using route from ActivatedRoute
    this.route.params.subscribe((params: Params) => {
      // ADD + TO CONVERT TO NUMBER
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription),
    });
  }
}
