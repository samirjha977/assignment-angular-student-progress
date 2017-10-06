import { Component, OnInit } from '@angular/core';
import { GradeCalculatorService } from '../grade-calculator.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  public performanceTableData = [];
  public white = 'white';
  constructor(private perfomanceData: GradeCalculatorService ) { 
    this.performanceTableData = this.perfomanceData.performanceTable;
  }

  ngOnInit() {
  }

}
