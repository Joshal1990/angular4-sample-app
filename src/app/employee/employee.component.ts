import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  add_button = false;
  panel_title = 'Add Employee';

  constructor() {  
    console.log('employee component invoked');
  }

  ngOnInit() {
  }

}
