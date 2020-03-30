import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search:string ='';

  constructor(public movieService:MoviesService ) { }

  ngOnInit() {
  }

  searchMovie(text:string){

    console.log(text);

//    if(this.search.length == 0){
//      return;
//    }
//
//    return this.movieService.searchMovie(this.search).subscribe( resp => console.log(resp) );

  }

}
