// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// Services
import { MoviesService } from './movies.service';
import { ContactService } from './contact.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ContactComponent } from './contact/contact.component';
import { environment } from 'src/environments/environment';
import { ActorsComponent } from './actors/actors.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
 
// Custom pipes
import { ShortDescriptionPipe } from './short-description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainFooterComponent,
    HomeComponent,
    MoviesComponent,
    ContactComponent,
    ActorsComponent,
    SingleMovieComponent,
    ShortDescriptionPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent },
      { path:'movies', component: MoviesComponent },
      { path:'contact', component: ContactComponent },
      { path:'movies/:movie', component: SingleMovieComponent }
    ]),
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    MoviesService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}