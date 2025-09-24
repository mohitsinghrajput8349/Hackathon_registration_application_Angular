import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLoginFormVisible = signal<boolean>(false);

  http = inject(HttpClient);
  router = inject(Router);
  
  registerObj: any = {
    fullName: '',
    email: '',
    password: '',
    collegeName: '',
    role: ''
  };

  loginObj: any = {
    email: '',
    password: ''
  };

  toggleForms() {
    this.isLoginFormVisible.set(!this.isLoginFormVisible());
  }
onRequest() {
  debugger;
  this.http.post(
    "https://api.freeprojectapi.com/api/ProjectCompetition/register",
    this.registerObj
  ).subscribe({
    next: (result: any) => {
      alert("Registration successful!");
      console.log(result);
    },
    error: (error) => {
      debugger;
      alert("Error: Something went wrong");
      console.error(error.error);
    }
  });
}
onLoging(){

  this.http.post(
    "https://api.freeprojectapi.com/api/ProjectCompetition/login",
    this.loginObj
  ).subscribe({
    next: (result: any) => { 
       debugger;
 localStorage.setItem('hackathnsser', JSON.stringify(result));
       this.router.navigateByUrl('/home');
      alert("login successful!");
      console.log(result);
    },
    error: (error) => {
      debugger;
      alert("Error: Something went wrong");
      console.error(error.error);
    }
  });

}

}
