import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.css']
})
export class PopularsComponent implements OnInit {

  populars:any;

  constructor( private movieService: MoviesService ) { }

  ngOnInit() {

    this.movieService.getPopulars()
        .subscribe( resp => {
          console.log(resp);
          this.populars = resp;
        })

  }

}
