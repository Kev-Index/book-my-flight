import { Time } from "@angular/common";

export class Flight {
    id?: number;
    source!: string;
    destination!: string;
    departureDate!: Date;
    departureTime!: string;
    arrivalDate!: Date;
    arrivalTime!: string;
    journeyDurationHours!: number;
    journeyDurationMinutes!: number;
    adultFare!: number;
    childFare!: number;
    totalSeats!: number;
}