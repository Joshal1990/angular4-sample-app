import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employeeList: object[];

  constructor(private empService: EmployeeService,
    private http: HttpClient) { }

  deleteEmployee(index){
    this.employeeList = JSON.parse(localStorage.getItem('localEmpValues')).splice(index,1);
  }

  ngOnInit() {
    console.log('dashboad init method invoked');
    this.http.get('http://localhost:8080/api/getDetails?id=34').subscribe(data => {
      console.log(data);
      this.employeeList = data as object[];
      localStorage.setItem('localEmpValues',this.employeeList);
      });
  }

}
