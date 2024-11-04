/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoffeListComponent } from './coffe-list.component';
import { Coffee } from '../Coffe';
import { async, of } from 'rxjs';
import { CoffeeService } from '../coffee.service';

describe('CoffeListComponent', () => {
  let component: CoffeListComponent;
  let fixture: ComponentFixture<CoffeListComponent>;
  let debug: DebugElement;

  const mockServerServiceCoffee = {
    getCoffees: () => of([
      {
        "id": 1,
        "nombre": "Café Especial para tí",
        "tipo": "Blend",
        "region": "Angelópolis, Antioquia",
        "sabor": "Panela, Durazno, Caramelo",
        "altura": 1920,
        "imagen": "imagen 1"
      },
      {
        "id": 2,
        "nombre": "Café Especial Navegante",
        "tipo": "Café de Origen",
        "region": "Guatapé, Antioquia",
        "sabor": "Cítrico, Naranja, Cacao",
        "altura": 1800,
        "imagen": "imagen 2"
      },
      {
        "id": 3,
        "nombre": "Café Especial El Prístino",
        "tipo": "Blend",
        "region": "Chinchiná, Caldas",
        "sabor": "Chocolate negro, Caramelo",
        "altura": 1700,
        "imagen": "imagen 3"
      }
    ])
  };


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeListComponent ],
      providers: [
        { provide: CoffeeService, useValue: mockServerServiceCoffee }  // Usar el mock del servicio
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeListComponent);
    component = fixture.componentInstance; 
    component.coffees = [];   
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('Creación de componente', () => {
    expect(component).toBeTruthy();
  });

  it('Validar registro en la tabla', async () =>{
    
    fixture.detectChanges();
    const filas = debug.queryAll(By.css('tbody tr'));
    expect(filas.length).toEqual(3);
  });

});
