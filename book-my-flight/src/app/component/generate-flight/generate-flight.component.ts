import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-generate-flight',
  templateUrl: './generate-flight.component.html',
  styleUrls: ['./generate-flight.component.css']
})
export class GenerateFlightComponent implements OnInit {

  generateFlightForm: FormGroup = new FormGroup({});
  name: string = '';
  constructor() { }

  ngOnInit(): void {
    this.generateFlightForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('')
    });
  }

  onFormSubmit() {

  }
}
