import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies:any[]=[];
  tvShows:any[]=[];

  private apiKey:string = '72449cb6a0e712f6aab12934860d4ecf';
  private urlMoviedb: string = 'https://api.themoviedb.org/3'

  constructor( private http: HttpClient ) { }

  //CINEMA

  getNowPlaying(){

    return this.http.get( `${this.urlMoviedb}/movie/now_playing?api_key=${this.apiKey }&language=en-EN&page=1`)
                      .pipe( map( (resp: any) =>  resp.results ) );
  }

  getMovie( id:string ){

    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=72449cb6a0e712f6aab12934860d4ecf`;

    return this.http.get( url ).pipe( map( (resp:any) => resp) );

  }

  getPopulars(){

    let url = `${ this.urlMoviedb }/movie/popular?api_key=${ this.apiKey }&language=en-EN&page=1`;

    return this.http.get( url ).pipe( map( (resp:any) => resp.results ) );

  }

  getUpcoming(){

    let url = `${ this.urlMoviedb }/movie/upcoming?api_key=${ this.apiKey }&language=en-EN&page=1`;

    return this.http.get( url ).pipe( map( (resp:any) => 
      resp.results
    ));
  }

  getSimilarMovie(id:string){
    let url = `${ this.urlMoviedb }/movie/${id}/similar?api_key=${ this.apiKey }&language=en-US&page=1`;

    return this.http.get(url).pipe( map( (resp:any) => resp.results ) );
  }

  getActors(id:string){

    let url = `${ this.urlMoviedb }/movie/${id}/credits?api_key=${ this.apiKey }`;

    return this.http.get(url).pipe( map( (resp:any) => resp.cast ) )

  }

  searchMovie( text:string ){

    let url = `${ this.urlMoviedb }/search/movie?api_key=${ this.apiKey }&language=en-EN&query=${ text }&page=1&include_adult=false`;

    return this.http.get( url ).pipe( map( (resp:any) => {
      this.movies = resp.results;
      console.log(this.movies);
      return resp.results;
    }) )
  }

  //TV

  getTvOnTheAir(){

    let url = `${this.urlMoviedb}/tv/on_the_air?api_key=${this.apiKey}&language=en-US&page=1`;

    return this.http.get( url ).pipe( map( (resp:any) => resp.results) );

  }

  getTvShow( id:string ){

    let url = `${ this.urlMoviedb }/tv/${ id }?api_key=${ this.apiKey }&language=en-US`;

    return this.http.get( url ).pipe( map( (resp:any) => resp) );

  }

  getTvCast( id:string ){

    let url = `${ this.urlMoviedb }/tv/${ id }/credits?api_key=${ this.apiKey }&language=en-US`;

    return this.http.get( url ).pipe( map( (resp:any) => resp.cast) )

  }

  getTvPopular(){

    let url = `${ this.urlMoviedb }/tv/popular?api_key=${ this.apiKey }&language=en-US&page=1`;

    return this.http.get( url ).pipe( map( (resp:any) => resp.results) );
  }

  searchTvShow(text:string){

    let url = `${ this.urlMoviedb }/search/tv?api_key=${ this.apiKey }&language=en-US&query=${ text }&page=1`;

    return this.http.get(url).pipe( map( (resp:any) => {
      this.tvShows = resp.results;
      console.log(this.tvShows);
      return resp.results 
    }) );

  }

  getPerson(id:string){

    let url = `${ this.urlMoviedb }/person/${ id }?api_key=${ this.apiKey }&language=en-US`;

    return this.http.get( url ).pipe( map( (resp:any) => resp) )

  }

  getPersonMovieCredits(id:string){

    let url = `${ this.urlMoviedb }/person/${ id }/movie_credits?api_key=${ this.apiKey }&language=en-US`;

    return this.http.get( url ).pipe( map( (resp:any) => resp.cast) )
  }

  getPersonTvShowCredits(id:string){

    let url = `${ this.urlMoviedb }/person/${ id }/tv_credits?api_key=${ this.apiKey }&language=en-US`;

    return this.http.get( url ).pipe( map( (resp:any) => resp.cast) )
  }


}
