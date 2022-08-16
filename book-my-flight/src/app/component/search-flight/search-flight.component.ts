import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from '../../service/flight.service'

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  searchFlightForm: FormGroup = new FormGroup({}); 
  source: string = '';
  destination: string = '';
  departureDate: string = '';

  constructor(private router: Router, private flightService: FlightService) { }

  ngOnInit(): void {
    this.searchFlightForm = new FormGroup({
      source: new FormControl(''),
      destination: new FormControl(''),
      departureDate: new FormControl('')
    });
  }

  onFormSubmit() {

    this.source = this.searchFlightForm.value.source;
    this.destination = this.searchFlightForm.value.destination;
    this.departureDate = this.searchFlightForm.value.departureDate.toString();
    this.flightService.searchFlights(this.source,this.destination,this.departureDate).subscribe({
      next : (data)=>{
          console.log("You're here!", data)
      },
      error: (e)=> { }
    });
  }
}
