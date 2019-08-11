import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ak-card',
  templateUrl: './ak-card.component.html',
  styleUrls: ['./ak-card.component.scss']
})
export class AkCardComponent implements OnInit {
  @Input() cardIcon: string;
  @Input() cardTitle: string;
  @Input() cardSubTitle: string;
  @Input() cardImg: string;
  @Input() cardText: string;


  constructor() {}

  ngOnInit() {}
}
