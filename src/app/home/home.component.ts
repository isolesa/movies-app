import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latest: any[] = [];

  constructor(private moviesService: MoviesService){
    this.moviesService.getMovies("name")
    .subscribe(response => {
      this.latest = response;
      // console.log(this.latest);
    })
  }

  get sortedByDate(){
    return this.latest.sort((a,b) => {
      return <any>new Date(b.createdAt) - <any>new Date(a.createdAt)
    });
  }

  ngOnInit(){}

}