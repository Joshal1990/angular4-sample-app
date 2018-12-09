import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employeeList: Employee[];

  constructor(private empService: EmployeeService) { }

  deleteEmployee(index){
    this.employeeList = this.employeeList.splice(index,1);
  }

  ngOnInit() {
    console.log('dashboad init method invoked');
    this.employeeList= this.empService.getEmployee();
  }

}
