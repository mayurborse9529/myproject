import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies:any
  PopularMovies:any
  TheatreMovies:any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingMovies();
     this.getPopularMovies();
     this.getTheatreMovies();
  }
    getTrendingMovies(){
       this.http.get('http://localhost:4200/assets/data/trending-movies.json')
       .subscribe((movies)=>{
          this.trendingMovies=movies
          console.log(this.trendingMovies)
       });
      }
    getPopularMovies(){
      this.http.get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe((movies)=>{
         this.PopularMovies=movies
         console.log(this.PopularMovies)
      
        });

}
  getTheatreMovies(){
  this.http.get('http://localhost:4200/assets/data/theatre-movies.json')
  .subscribe((movies)=>{
     this.TheatreMovies=movies
     console.log(this.TheatreMovies)
  
    });
}
}
