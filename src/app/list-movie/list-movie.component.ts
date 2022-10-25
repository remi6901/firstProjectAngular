import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  list : string = "Liste de film"
  movies = ["superman", "The Godfather", "The Shawshank Redemption", "Schindler's List", "spiderman", 'batman']
  constructor() { }

  ngOnInit(): void {
  }

  showMovie = true;

}
