import { Component } from '@angular/core';
import { TestMaterialComponent } from './test-material/test-material.component';
import 'chartjs';
import { ChartsTestComponent } from './charts-test/charts-test.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ TestMaterialComponent, ChartsTestComponent ]
})

export class AppComponent {
  title = 'app works!';
}
