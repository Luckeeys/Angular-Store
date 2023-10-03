import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  // Imagem Label
  @Input() gameName:string='' // texto alt da imagem
  @Input() cardImg:string='' // imagem de fundo do card

  // Card Label
  @Input() gameLabel:string='' //

  // Card pricing
  @Input() gameTitle:string = '' //Play It Now!
  @Input() gameType:string = '' //Full Game | PS4
  @Input() gamePrice:string = '' //R$ 399,90

  constructor() { }

  ngOnInit(): void {
  }

}
