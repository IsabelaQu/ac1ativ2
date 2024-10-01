import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent {  // Array 
  products = [
    { name: 'Crocs Relampago MCQueen', description: 'Sandália MCQueen Adulto com Led', price: 319, inStock: true },
    { name: 'Crocs Shrek', description: 'Sandália Crocs Shrek Classico', price: 260, inStock: false },
    { name: 'Crocs Toy Story Buzz', description: 'Sandália Crocs Classic Toy Sory', price: 299, inStock: true }
  ];
}