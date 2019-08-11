import { Component } from '@angular/core';
import 'hammerjs';
import data from './common/data/dataFile.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = data.site.title;
  icon = data.site.navIcon;
}
