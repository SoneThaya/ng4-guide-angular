import { LoggingService } from './../logging.service';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangedSub: Subscription;

  constructor(
    private slService: ShoppingListService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChangedSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

    this.loggingService.printLog('Hello from Shopping List component ngonInit');
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.igChangedSub.unsubscribe();
  }
}
