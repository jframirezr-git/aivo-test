import { Component, OnInit } from '@angular/core';
import {Movies} from "../../../@fake-db/movies";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {
    this.getMovie();
  }

  public contentHeader: object

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
    console.log(this.movies);
  }

}
