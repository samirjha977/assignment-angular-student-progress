import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { GradeCalculatorService } from './grade-calculator.service';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { PerformanceComponent } from './performance/performance.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsComponent } from './assignments/assignments.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PerformanceComponent,
    AddAssignmentComponent,
    AssignmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GradeCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
