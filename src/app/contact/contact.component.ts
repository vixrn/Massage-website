import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 51.581186;
  lng: number = -3.030594;

  constructor() { }

  ngOnInit() {
  }

}
