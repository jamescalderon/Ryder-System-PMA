import { Component, OnInit, Input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() titleNav: string;
  @Input() iconNav: string;


  constructor() { }

  ngOnInit() {
  }

}
