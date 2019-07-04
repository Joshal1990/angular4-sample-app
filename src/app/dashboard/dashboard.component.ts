import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  

  /*getAllContact(){
    console.log('get all contact method called!!!');
    this.http.get('http://localhost:8080/api/allContacts').subscribe(data => {
      console.log(data);
      this.employeeList = data as object[];
      });
  }*/
  /*deleteContact(contactID){
    console.log('delete method invoked!!!');
    var params = new HttpParams().set('id',contactID);
    this.http.post('http://localhost:8080/api/delete',params).subscribe(data => {
      console.log(data);
        if(data == 0){
            this.getAllContact();
        }
      });
  }*/

  ngOnInit() {
   // this.getAllContact();
  }
}
