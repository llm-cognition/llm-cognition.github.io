import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  sessions = [
    {time: '09:00', title: 'Introduction and Opening remarks', speaker: '-'},
    {time: '09:10', title: 'Invited Talk 1', speaker: 'Subbarao Kambhampati'},
    {time: '09:40', title: 'Invited Talk 2', speaker: 'Antoine Bosselut'},
    {time: '10:10', title: 'Poster Session 1', speaker: '-'},
    {time: '11:10', title: 'Break', speaker: '-'},
    {time: '11:30', title: 'Invited Talk 3', speaker: 'Chelsea Finn'},
    {time: '12:00', title: 'Invited Talk 4', speaker: 'Ethan Wilcox'},
    {time: '12:30', title: 'Lunch Break', speaker: '-'},
    {time: '14:00', title: 'Panel Discussion', speaker: '-'},
    {time: '15:00', title: 'Contributed Talk 1', speaker: 'TBD'},
    {time: '15:15', title: 'Contributed Talk 2', speaker: 'TBD'},
    {time: '15:30', title: 'Poster Session 2', speaker: '-'},
    {time: '16:30', title: 'Invited Talk 5', speaker: 'Melanie Mitchell'},
    {time: '17:00', title: 'End', speaker: '-'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
