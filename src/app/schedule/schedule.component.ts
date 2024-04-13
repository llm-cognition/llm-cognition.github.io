import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  sessions = [
    {time: '09:00', title: 'Introduction and Opening remarks', speaker: 'TBD'},
    {time: '09:10', title: 'Keynote Speech 1', speaker: 'TBD'},
    {time: '10:00', title: 'Poster Spotlights', speaker: 'TBD'},
    {time: '10:15', title: 'Poster Session 1', speaker: 'TBD'},
    {time: '10:45', title: 'Coffee Break', speaker: '-'},
    {time: '11:00', title: 'Poster Session 2', speaker: 'TBD'},
    {time: '11:30', title: 'Invited Talk 1', speaker: 'TBD'},
    {time: '12:00', title: 'Lunch Break', speaker: 'TBD'},
    {time: '13:30', title: 'Invited Talk 2', speaker: 'TBD'},
    {time: '14:00', title: 'Invited Talk 3', speaker: 'TBD'},
    {time: '14:30', title: 'Poster Session 3', speaker: 'TBD'},
    {time: '15:00', title: 'Coffee Break', speaker: 'TBD'},
    {time: '15:30', title: 'Poster Session 4', speaker: 'TBD'},
    {time: '16:00', title: 'Invited Talk 4', speaker: 'TBD'},
    {time: '16:30', title: 'Contributed Talk 1', speaker: 'TBD'},
    {time: '16:45', title: 'Contributed Talk 2', speaker: 'TBD'},
    {time: '17:00', title: 'Panel discussion', speaker: 'TBD'},
    {time: '18:00', title: 'End', speaker: '-'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
