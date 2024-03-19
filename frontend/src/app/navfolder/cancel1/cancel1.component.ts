import { Component,OnInit } from '@angular/core';
import { BillService } from '../../services/bill.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-cancel1',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './cancel1.component.html',
  styleUrl: './cancel1.component.css'
})
export class Cancel1Component implements OnInit {
  users: any[]=[];

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.billService.getData('User').subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}