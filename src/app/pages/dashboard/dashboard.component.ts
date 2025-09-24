import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 totalStudents: number = 120;
  registeredStudents: number = 95;

  get notRegistered(): number {
    return this.totalStudents - this.registeredStudents;
  }
}
