import { Component,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from '../app.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card1',
  standalone: true,
  imports: [MatCardModule,NgFor],
  templateUrl: './card1.component.html',
  styleUrl: './card1.component.css'
})
export class Card1Component {
  navigate() {
    // Add your logic for the "Direction" button
    console.log("Navigate to directions...");
  }

  share() {
    // Add your logic for the "Share" button
    console.log("Share content...");
  }

  bookRoom() {
    // Add your logic for the "Book a Room" button
    console.log("Book a room...");
  }

// avai

totalPersons: number = 0;

adultsOptions: number[] = [0, 1, 2, 3];
childrenOptions: number[] = [0, 1, 2, 3];

constructor() { }

calculateTotal(adultsValue: string, childrenValue: string) {
  const adults = parseInt(adultsValue);
  const children = parseInt(childrenValue);
  this.totalPersons = adults + children;
}
}