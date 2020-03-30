import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  upcomings:any;

  constructor( private movieService: MoviesService ) { }

  ngOnInit() {

    this.movieService.getUpcoming().subscribe( resp => {
      console.log(resp);
      this.upcomings = resp;
    })

    

  }

}
