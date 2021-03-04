import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  // CREATE VARIABLE FOR ID
  id: number;
  editMode = false;

  // retrieve id with ActivatedRoute
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // get id from params using route from ActivatedRoute
    this.route.params.subscribe((params: Params) => {
      // ADD + TO CONVERT TO NUMBER
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });
  }
}
