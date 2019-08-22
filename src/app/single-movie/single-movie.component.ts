import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  movie;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService){
  }
  
  ngOnInit(){
    let movieParam = this.route.snapshot.paramMap.get("movie");
    if(movieParam){
      this.moviesService.getMovie(movieParam).pipe(take(1)).subscribe(response => {
      this.movie = response;
    });
  }
  };
}