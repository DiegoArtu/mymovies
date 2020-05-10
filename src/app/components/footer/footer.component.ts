import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  load:boolean = false
  year;

  constructor() { }

  ngOnInit() {

    this.year = new Date().getFullYear();

    //setTimeout( ()=>{
    //  this.load = true;
    //}, 100);
  }



}
