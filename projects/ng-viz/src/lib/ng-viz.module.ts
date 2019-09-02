import { NgModule } from '@angular/core';
import { NgVizComponent } from './ng-viz.component';
import { NgVizBarChartComponent } from './charts/bar-chart/bar-chart';



@NgModule({
  declarations: [
    NgVizComponent,
    NgVizBarChartComponent
  ],
  imports: [
  ],
  exports: [
    NgVizComponent,
    NgVizBarChartComponent

  ]
})
export class NgVizModule { }
