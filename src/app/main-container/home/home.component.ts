import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showId(id:number) :void {
    console.log(id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
