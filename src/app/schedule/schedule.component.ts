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
    {time: '10:10', title: 'Poster Session 1', speaker: 'Papers #1-#32 (see below)'},
    {time: '11:10', title: 'Break', speaker: '-'},
    {time: '11:30', title: 'Invited Talk 3', speaker: 'Chelsea Finn'},
    {time: '12:00', title: 'Invited Talk 4', speaker: 'Ethan Wilcox'},
    {time: '12:30', title: 'Lunch Break', speaker: '-'},
    {time: '14:00', title: 'Panel Discussion', speaker: 'Subbarao Kambhampati, Antoine Bosselut, Ethan Wilcox'},
    {time: '15:00', title: 'Contributed Talk 1', speaker: 'Paper #9: Yuxiao Qu, Tianjun Zhang, Naman Garg, Aviral Kumar'},
    {time: '15:10', title: 'Contributed Talk 2', speaker: 'Paper #10: Ziqiao Ma, Zekun Wang, Joyce Chai'},
    {time: '15:20', title: 'Contributed Talk 3', speaker: 'Paper #57: Raphaël Millière, Charles Rathkopf'},
    {time: '15:30', title: 'Poster Session 2', speaker: 'Papers #33-#63 (see below)'},
    {time: '16:30', title: 'Invited Talk 5', speaker: 'Melanie Mitchell'},
    {time: '17:00', title: 'End', speaker: '-'}
  ];

  // {time: '15:00', title: 'Contributed Talk 1', speaker: 'Yuxiao Qu, Tianjun Zhang, Naman Garg, Aviral Kumar <br> (Recursive Introspection: Teaching LLM Agents How to Self-Improve)'},
  // {time: '15:15', title: 'Contributed Talk 2', speaker: 'Ziqiao Ma, Zekun Wang, Joyce Chai <br> (Babysit a Language Model from Scratch: Interactive Language Learning by Trials and Demonstrations)'},

  constructor() { }

  ngOnInit(): void {
  }

}
