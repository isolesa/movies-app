import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private database: AngularFireDatabase) {}

  getMovies(order: string){
    return this.database.list('/categories/movies', ref => {
      return ref.orderByChild(order);
    }).valueChanges();
  }

  getMovie(movie:string) { 
    return this.database.object('/categories/movies/' + movie).valueChanges();
  }
}