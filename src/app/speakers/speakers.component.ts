import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    {
      name: 'Melanie Mitchell',
      position: 'Professor',
      institute: ' Santa Fe Institute',
      img: 'assets/speakers/melanie-mitchel.png',
      url: 'https://melaniemitchell.me',
      talk_title: "Talk Title: TBA",
      talk_abstract: "Abstract: TBA"
    },
    {
      name: 'Subbarao Kambhampati',
      position: 'Professor',
      institute: 'Arizona State University',
      img: 'assets/speakers/subbarao-kambhampati.png',
      url: 'https://rakaposhi.eas.asu.edu',
      talk_title: "Talk Title: TBA",
      talk_abstract: "Abstract: TBA"
    },
    {
      name: 'Chelsea Finn',
      position: 'Assistant Professor',
      institute: 'Stanford University',
      img: 'assets/speakers/chelsea-finn.jpg',
      url: 'https://ai.stanford.edu/~cbfinn/',
      talk_title: "Talk Title: TBA",
      talk_abstract: "Abstract: TBA"
    },
    {
      name: 'Antoine Bosselut',
      position: 'Assistant Professor',
      institute: 'EPFL',
      img: 'assets/speakers/antoine-bosselut.png',
      url: 'https://atcbosselut.github.io',
      talk_title: "Talk Title: TBA",
      talk_abstract: "Abstract: TBA"
    },
    {
      name: 'Ethan Wilcox',
      position: 'Postdoctoral Fellow',
      institute: 'ETH Zurich',
      img: 'assets/speakers/ethan-wilcox.png',
      url: 'https://wilcoxeg.github.io',
      talk_title: "Talk Title: TBA",
      talk_abstract: "Abstract: TBA"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
