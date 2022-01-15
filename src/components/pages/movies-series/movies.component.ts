import { Component, OnInit } from '@angular/core';
import {Movies} from "../../../@fake-db/movies";
import {NgbDate} from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";

@Component({
  selector: 'app-home',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor() {
    this.getMovie();
  }

  public contentHeader: object;
  public fromDate: NgbDate;
  public startDatePicker = null;
  public name: string = null;

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  public movies: any;
  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: 'Movies',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Movies',
            isLink: false
          }
        ]
      }
    }
  }

  public getMovie(): void{
    this.movies = Movies.data.entries.filter(movie => movie.programType === "movie" );
  }

  public filter():void {
    if(this.startDatePicker !== null){
      this.movies = this.movies.filter(movie => movie.releaseYear === this.startDatePicker.year);
    }

    if(this.name !== null || this.name === ""){
      this.movies = this.movies.filter(movie => movie.title === this.name);
    }

    if(this.movies.length === 0){
      Swal.fire({
        icon: 'warning',
        title: '¡Atención!',
        text: `No se encontraron peliculas para el año seleccionado`,
      });
      this.getMovie();
    }
  }

}
