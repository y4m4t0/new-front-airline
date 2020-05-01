import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public flights = []

  constructor(private filghtsService: FlightService) { }

  ngOnInit(): void {
    this.filghtsService.getFlights().subscribe(
      data => {
        this.flights = data
      }      
    )
  }

}

// var one = document.querySelector('#one-way');
// var two = document.querySelector('#two-way');
// var return_day = document.querySelector('#return-day');

// function oneClick(){
// 	return_day.classList.add("display-none")
// 	return_day.classList.remove("main-input-row-2-container");
// 	one.classList.add("button-ex-style");
// 	one.classList.remove("main-button-choose");
// 	two.classList.remove("button-ex-style");
// 	two.classList.add("main-button-choose");
// }
// function twoClick(){
// 	return_day.classList.remove("display-none");
// 	return_day.classList.add("main-input-row-2-container")
// 	two.classList.add("button-ex-style");
// 	two.classList.remove("main-button-choose");
// 	one.classList.remove("button-ex-style");
// 	one.classList.add("main-button-choose");
// }