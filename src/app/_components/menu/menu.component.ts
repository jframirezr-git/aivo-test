import { Component, OnInit } from '@angular/core';
import {MenuButtonInterface} from '../interface/menu-button-interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   nombre: string;
   url: string;

  data: MenuButtonInterface [] = [];

  constructor() { }

  ngOnInit(): void {

    this.nombre = 'pepe pepinin';
    this.url = 'https://material.angular.io/assets/img/examples/shiba1.jpg';

    this.data = [{
      img: '',
      title: 'Estadisticas',
      url: 'x',
      options: [{icon: 'list', title: 'Listado General', url: '/facebook'}, {icon: 'list', title: 'prueba', url: '/login'}],
    },
      {
        img: '',
        title: 'Lineas de codigo',
        url: 'x',
        options: [{icon: 'list', title: 'vulnerabilidades', url: '/login'}],
      }];
  }

}
