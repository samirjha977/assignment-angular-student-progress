import { Component, OnInit } from '@angular/core';
import { GradeCalculatorService } from '../grade-calculator.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  public tableData: any;
  constructor(private assignmentData: GradeCalculatorService) { 
    this.tableData = assignmentData.assignmentTable;
  }

  ngOnInit() {
  }

}
