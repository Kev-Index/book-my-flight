import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-generate-flight',
  templateUrl: './generate-flight.component.html',
  styleUrls: ['./generate-flight.component.css']
})
export class GenerateFlightComponent implements OnInit {

  generateFlightForm: FormGroup = new FormGroup({});
  flight: Flight = new Flight;
  name: string = '';
  source: string = '';
  destination: string = ''
  departureDate: string = '';
  departureTime: string = '';
  arrivalDate: string = '';
  arrivalTime: string = '';
  journeyDurationHours: number = -1;
  journeyDurationMinutes: number = -1;
  adultFare: number = -1;
  childFare: number = -1;
  totalSeats: number = -1;


  constructor(private router: Router, private flightService: FlightService) { }

  ngOnInit(): void {
    this.generateFlightForm = new FormGroup({
      source: new FormControl(''),
      destination: new FormControl(''),
      departureDate: new FormControl(''),
      departureTime: new FormControl(''),
      arrivalDate: new FormControl(''),
      arrivalTime: new FormControl(''),
      journeyDurationHours: new FormControl(''),
      journeyDurationMinutes: new FormControl(''),
      adultFare: new FormControl(''),
      childFare: new FormControl(''),
      totalSeats: new FormControl(''),
    });
  }

  onFormSubmit() {
    this.flight.source = this.generateFlightForm.value.source;
    this.flight.destination = this.generateFlightForm.value.destination;
    this.flight.departureDate = this.generateFlightForm.value.departureDate;
    this.flight.departureTime = this.generateFlightForm.value.departureTime;
    this.flight.arrivalDate = this.generateFlightForm.value.arrivalDate;
    this.flight.arrivalTime = this.generateFlightForm.value.arrivalTime;
    this.flight.journeyDurationHours = this.generateFlightForm.value.journeyDurationHours;
    this.flight.journeyDurationMinutes = this.generateFlightForm.value.journeyDurationMinutes;
    this.flight.adultFare = this.generateFlightForm.value.adultFare;
    this.flight.childFare = this.generateFlightForm.value.childFare;
    this.flight.totalSeats = this.generateFlightForm.value.totalSeats;

    //this.flightService.
  }
}
