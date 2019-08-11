import { Component, OnInit } from '@angular/core';
import data from './../common/data/dataFile.json';
@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {
  tiles = data.links.references;
  constructor() { }

  ngOnInit() {
  }

}
