import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.css']
})
export class OrganizersComponent implements OnInit {

  organizers = [
    {
      name: 'Payel Das',
      position: 'Manager and Principal Research Staff Member',
      institute: 'IBM Research AI',
      img: 'assets/organizers/payel.png',
      url: 'https://scholar.google.com/citations?user=1vs31MgAAAAJ&hl=en'
    },
    {
      name: 'Anna Ivanova',
      position: 'Assistant Professor',
      institute: 'Georgia Tech',
      img: 'assets/organizers/anna.png',
      url: 'https://scholar.google.com/citations?user=hBUjCB0AAAAJ&hl=en'
    },
    {
      name: 'Aurélie Lozano',
      position: 'Senior Research Scientist',
      institute: 'IBM T.J. Watson Research Center',
      img: 'assets/organizers/aurelie.png',
      url: 'https://scholar.google.com/citations?user=4wTGaDsAAAAJ&hl=en'
    },
    {
      name: 'Subhajit Chaudhury',
      position: 'Research Staff Member',
      institute: 'IBM T.J. Watson Research Center',
      img: 'assets/organizers/subhajit.png',
      url: 'https://scholar.google.co.jp/citations?user=EBTpFrQAAAAJ&hl=en'
    },
    {
      name: 'Ilia Sucholutsky',
      position: 'Postdoctoral Fellow',
      institute: 'Princeton University',
      img: 'assets/organizers/ilia.png',
      url: 'https://scholar.google.com/citations?hl=en&user=6MfHyuMAAAAJ'
    },
    {
      name: 'Badr AlKhamissi',
      position: 'PhD Student',
      institute: 'EPFL',
      img: 'assets/organizers/badr.png',
      url: 'https://scholar.google.com/citations?user=0l9UHtQAAAAJ&hl=en'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
