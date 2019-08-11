import { Component, OnInit } from '@angular/core';
import { Tile } from '../common/models/content';
import data from './../common/data/dataFile.json';

@Component({
  selector: 'app-process-flow',
  templateUrl: './process-flow.component.html',
  styleUrls: ['./process-flow.component.scss']
})
export class ProcessFlowComponent implements OnInit {
  tiles = data.links.processFlow;




  constructor() { }

  ngOnInit() { }


}
