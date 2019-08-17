import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit{

  @Input("actors") actors;

  movieActors;

  constructor(){}

  ngOnInit(){
    this.movieActors = Object.keys(this.actors).map(m => this.actors[m]);
    // console.log(typeof this.movieActors);
  }
}