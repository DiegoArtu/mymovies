import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.css']
})
export class PersondetailComponent implements OnInit {

  person:any;
  personmcs:any;
  persontvcs:any;

  constructor( 
    public _ms: MoviesService,
    public route: ActivatedRoute    
    ) { }

  ngOnInit() {

    window.scroll(0,0);

    this.route.params.subscribe( params => {
      this._ms.getPerson( params['id'] )
          .subscribe( (person:string) =>{
            console.log(person);
            this.person = person;
          })
    })

    this.route.params.subscribe( params => {
      this._ms.getPersonMovieCredits( params['id'] )
          .subscribe( (personmc:string) =>{
            console.log(personmc);
            this.personmcs = personmc;
          })
    })

    this.route.params.subscribe( params => {
      this._ms.getPersonTvShowCredits( params['id'] )
          .subscribe( (persontvcs:string) =>{
            console.log(persontvcs);
            this.persontvcs = persontvcs;
          })
    })

  }

}
