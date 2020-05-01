import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public flights = []
  public editable: boolean = false
  constructor(private filghtsService: FlightService) { }

  flightModel = {
    id: 0,
    company: '',
    destination: '',
    pointOfDeparture: '',
    startDate: '',
    startTime: '',
    arrivingTime: '',
    arrivingDate: '',
    timeSpent: '',
    amountOfSeats: ''
  }

  ngOnInit(): void {

    this.filghtsService.refresh.subscribe(() => {
      this.getAllFlights()
    })
    this.getAllFlights() 
  }
  
  private getAllFlights() {
    this.filghtsService.getFlights().subscribe(
      data => {
        this.flights = data
      }      
    )
}

  onEdit(id) {
    this.editable = true
    this.filghtsService.getFlights().subscribe(
      data => {
        let fly = data.find(o => o._id == id)
        console.log(fly)
        this.flightModel.id = id
        this.flightModel.company = fly.company
        this.flightModel.destination = fly.destination
        this.flightModel.pointOfDeparture = fly.pointOfDeparture
        this.flightModel.startDate = fly.startDate
        this.flightModel.startTime = fly.startTime
        this.flightModel.arrivingTime = fly.arrivingTime
        this.flightModel.arrivingDate = fly.arrivingDate
        this.flightModel.timeSpent = fly.timeSpent
        this.flightModel.amountOfSeats = fly.amountOfSeats
      }
    )
  }

  onDelete(id) {
    this.filghtsService.deleteFlight(id).subscribe()
  }

  onCreate() {
    this.filghtsService.createFlight(this.flightModel).subscribe()
  }

  onUpdate() {
    this.filghtsService.updateFlight(this.flightModel).subscribe()
  }

}
