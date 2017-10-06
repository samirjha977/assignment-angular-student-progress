import { Injectable } from '@angular/core';
import { AssignmentTableData, PerformanceTableData } from './main.model';

@Injectable()
export class GradeCalculatorService {
  public assignmentTable = [];
  public performanceTable = [];
  constructor() { }

  gradingMachine (data) {
    let percent: number;
    let grade: string;
    let color: string;
    let percentToString: string;
    percent = ((data.scored / data.total) * 100);
    percentToString = percent.toFixed();
    this.assignmentTable.push(new AssignmentTableData(data.assginName, data.scored, data.total, percentToString));
    if (percent >= 90 && percent <= 100) {
      grade = 'A';
      color = 'green';
    } else if ( percent >= 80 && percent <= 89 ) {
      grade = 'B';
      color = 'blue';
    } else if ( percent >= 70 && percent <= 79 ) {
      grade = 'C';
      color = '#3366ff';
    } else if ( percent >= 60  && percent <= 69 ) {
      grade = 'D';
      color = '#b36b00';
    } else {
      grade = 'F';
      color = 'red';
    }
    this.performanceTable.push( new PerformanceTableData(data.scored, data.total, percentToString, grade, color));
  }
}
