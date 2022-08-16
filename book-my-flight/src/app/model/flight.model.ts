export class Flight {
    id?: number;
    source!: string;
    destination!: string;
    departureDate!: string;
    departureTime!: string;
    arrivalDate!: string;
    arrivalTime!: string;
    journeyDurationHours!: number;
    journeyDurationMinutes!: number;
    adultFare!: number;
    childFare!: number;
    totalSeats!: number;
}