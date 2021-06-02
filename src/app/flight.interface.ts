export interface Flight {
  journey: string;
  departureDate: Date;
  returnDate?: Date;
  originCity: string;
  destinationCity: string;
  passengers: number;
}
