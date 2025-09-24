import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser'; 
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathonRegistrationApp';
  protectedtitle = 'hackathon_registration_app';

  hackathonUser: string | null = null;  
  isLoggedIn: boolean = false;

  constructor() {
    const localData = localStorage.getItem("hackathonUser");
    if (localData) {
      const parsed = JSON.parse(localData);
      this.hackathonUser = parsed.fullName || parsed.email;  // show name/email
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem("hackathonUser");
    this.hackathonUser = null;
    this.isLoggedIn = false;
  }
}
