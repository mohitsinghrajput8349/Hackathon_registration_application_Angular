import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HackathonEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events: HackathonEvent[] = [
    {
      title: 'Hackathon Kickoff',
      date: '2025-10-01',
      time: '10:00 AM',
      location: 'Main Auditorium',
      description: 'Introduction to the hackathon and rules briefing.'
    },
    {
      title: 'Project Submission Deadline',
      date: '2025-10-03',
      time: '05:00 PM',
      location: 'Online',
      description: 'Final deadline to submit all project entries.'
    },
    {
      title: 'Judging and Awards',
      date: '2025-10-04',
      time: '02:00 PM',
      location: 'Conference Hall',
      description: 'Judges review projects and announce winners.'
    }
  ];
}
