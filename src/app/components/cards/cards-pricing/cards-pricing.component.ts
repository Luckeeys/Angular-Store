import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-pricing',
  templateUrl: './cards-pricing.component.html',
  styleUrls: ['./cards-pricing.component.css']
})
export class CardsPricingComponent implements OnInit {

  @Input() gameTitle:string = '' //Play It Now!
  @Input() gameType:string = '' //Full Game | PS4
  @Input() gamePrice:string = '' //R$ 399,90

  constructor() { }

  ngOnInit(): void {
  }

}
