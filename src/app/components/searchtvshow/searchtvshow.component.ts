import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-searchtvshow',
  templateUrl: './searchtvshow.component.html',
  styleUrls: ['./searchtvshow.component.css']
})
export class SearchtvshowComponent implements OnInit {

  search:string ='';

  constructor( public movieService: MoviesService ) { }

  ngOnInit() {

  }

  searchtvShow(){

    if( this.search.length == 0 ){
      return;
    }

    this.movieService.searchTvShow(this.search).subscribe();

  }

}
