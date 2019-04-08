import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger('appearDisappear', [
      state('appear', style({
        opacity: 1
      })),
      state('disappear', style({
        opacity: 0,
        top: '20px'
      })),
      transition('appear => disappear', [
        animate('0.25s')
      ]),
      transition('disappear => appear', [
        animate('0.25s')
      ])
    ])
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.isVisible = true);
  }
}
