import { Component, OnInit } from '@angular/core';
import data from './../common/data/dataFile.json';

@Component({
  selector: 'app-bus-model',
  templateUrl: './bus-model.component.html',
  styleUrls: ['./bus-model.component.scss']
})
export class BusModelComponent implements OnInit {
  tiles = data.links.businessModel;
  constructor() { }

  ngOnInit() {
  }

}
