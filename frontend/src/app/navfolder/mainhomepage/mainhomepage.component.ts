import { Component } from '@angular/core';
import { Card1Component } from '../../card1/card1.component';
@Component({
  selector: 'app-mainhomepage',
  standalone: true,
  imports: [Card1Component],
  templateUrl: './mainhomepage.component.html',
  styleUrl: './mainhomepage.component.css'
})
export class MainhomepageComponent {
  images: string[] = ['1.jpg', '2.jpg', '3.jpg'];
  currentIndex: number = 0;

  ngOnInit() {
    this.showImage(this.currentIndex);
  }

  showImage(index: number) {
    this.currentIndex = index;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.showImage(this.currentIndex);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.showImage(this.currentIndex);
  }
}
