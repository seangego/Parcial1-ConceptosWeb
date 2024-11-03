import { Component, OnInit } from '@angular/core';
import { Coffee } from '../Coffe';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffe-list',
  templateUrl: './coffe-list.component.html',
  styleUrls: ['./coffe-list.component.css']
})
export class CoffeListComponent implements OnInit {

  coffees: Array<Coffee> = [];
  constructor(private coffeeService: CoffeeService) { }

  getCoffees():void{
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
    });
  }

  ngOnInit() {
    this.getCoffees();
  }

}
