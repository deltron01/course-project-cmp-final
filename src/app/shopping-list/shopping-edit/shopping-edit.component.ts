import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;
  ingredientAdded: Ingredient ;
  @Output() ingredientAddedEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    this.ingredientAdded = new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value)
    this.ingredientAddedEvent.emit(this.ingredientAdded);
  }
}
