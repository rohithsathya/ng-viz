import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'ng-viz-bar',
  templateUrl: 'bar-chart.html',
  styleUrls: ['bar-chart.scss']
})
export class NgVizBarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(d3.max([1,2,3]));
  }

}
