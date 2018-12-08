import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4 App';
  panel_title = 'Admin Dashboard';
  add_button = true;
  showEmployee = false;
  showDashboard = true;
  
  addEmployee(){
      this.showDashboard = false;
      this.showEmployee = true;
      console.log('add empployee method invoked '+this.showEmployee);
  };

}
