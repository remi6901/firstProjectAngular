import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  list : string = "Liste de chanson"
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
  constructor() { }

  ngOnInit(): void {
  }

}
