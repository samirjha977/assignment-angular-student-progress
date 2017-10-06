import { Component, OnInit } from '@angular/core';
import { AssignmentInput} from '../main.model';
import { GradeCalculatorService } from '../grade-calculator.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  public assignmentName: string;
  public scoredPoints: number;
  public pointPossible: number;

  constructor(private gradeCalculator: GradeCalculatorService) { }

  ngOnInit() {
  }

  addAssignment () {
    let tempInputObject: object;
    tempInputObject = new AssignmentInput (this.assignmentName, this.scoredPoints, this.pointPossible);
    this.gradeCalculator.gradingMachine(tempInputObject);
    this.assignmentName = null;
    this.scoredPoints = null;
    this. pointPossible = null;
  }
}
