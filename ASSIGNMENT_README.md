# Student Assignment based on Angular Quickstart
1. Fork this repository.
2. Clone your fork of this repository to your machine.
3. Change to the assignment-angular-student-progress directory and run the following command:
```
ng new student-progress --directory ./ --skip-git
```
3. Complete the student progress assignment based on the information and screenshot below.
4. Commit and push your changes to your fork of the repository on GitHub.

Assignment
* Add the ability to add an assignment
* When you click on the submit button it should add the assignment to the assignments list
* Changes to the assignment list should update the student's performance table immediately
* The grade should be calculated based on the percentage of points scored vs points possible <br/>
  90 - 100 = A, 80 - 89 = B, 70-79 = C, 60-69 = D, \<60 = F

  Use the following css to style your tables.
```
    <style>
    /* Defines a cleaner look for tables */
    table  { border-collapse: collapse; }
    td, th { border: 1px solid black; padding: 3px 8px; }
    th     { text-align: left; }
    </style>
```

![Results Image](./student-progress.png?raw=true)

