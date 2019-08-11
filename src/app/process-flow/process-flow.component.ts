import { Component, OnInit } from '@angular/core';
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
