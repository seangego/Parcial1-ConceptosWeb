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
  conteoXTipo: Map<string, number> = new Map();
  constructor(private coffeeService: CoffeeService) { }

  getCoffees():void{
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
      this.countTypeCoffee();
    });
  }

  countTypeCoffee():void{
    console.log(this.coffees.length)
    for (let i = 0; i < this.coffees.length; i++) {
      let tipo = this.coffees[i].tipo; 
      tipo = tipo.replace("Café","");     
      let valor : number | undefined = 0;
      if(this.conteoXTipo.has(tipo)){
        valor =  this.conteoXTipo.get(tipo);
        if(valor == undefined){
          valor = 1;
        }
        this.conteoXTipo.set(tipo,valor+1);
      }else{
        this.conteoXTipo.set(tipo,1);
      }
    }
  }
  ngOnInit() {
    this.getCoffees();
    
  }

}
