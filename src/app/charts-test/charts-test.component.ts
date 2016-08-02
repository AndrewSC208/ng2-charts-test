import { Component, OnInit } from '@angular/core';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  selector: 'app-charts-test',
  templateUrl: 'charts-test.component.html',
  styleUrls: ['charts-test.component.css'],
  directives: [CHART_DIRECTIVES]
})
export class ChartsTestComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales'];
  public doughnutChartData:number[] = [999, 450];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors: any[] = [
  	{ backgroundColor: ["#00fff", "#000000"]}
  ];
  	

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}


