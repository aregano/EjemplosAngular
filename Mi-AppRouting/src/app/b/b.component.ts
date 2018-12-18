import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/Pedido';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  pedidos: Pedido[] = null;

  constructor() { }

  ngOnInit() {
    this.pedidos=[
      new Pedido (1, "Mandanga de la Buena", 69),
      new Pedido (2, "Nutells", 2.5),
      new Pedido (3, "Cigarros Virginia Flandria", 5.10),
      new Pedido (4, "Filtros", 1),
    ]
  }

}
