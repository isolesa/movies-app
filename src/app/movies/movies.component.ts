import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  
  movies: any[];

  constructor(moviesService: MoviesService) {
    moviesService.getMovies("name").subscribe(response => {
      this.movies = response;
      // console.log(this.movies);
    });
  }

  ngOnInit(){}
}