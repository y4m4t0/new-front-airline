import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-real-about-us',
  templateUrl: './real-about-us.component.html',
  styleUrls: ['./real-about-us.component.css']
})
export class RealAboutUsComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  goBack(){
    this.location.back();
  }

}
