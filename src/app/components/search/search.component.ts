import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search:string = '';

  constructor( public movieService: MoviesService ) { }

  ngOnInit() {
  }

  searchMovie(){
    if(this.search.length == 0){
      return;
    }

    this.movieService.searchMovie(this.search)
        .subscribe()
  }

}
