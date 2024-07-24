import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {
    papers: any[] = []; // Define a property to hold the data

    contributed_talk_ids: number[] = [10, 11, 58];

    constructor(private http: HttpClient) { } // Inject HttpClient

    ngOnInit(): void {
      this.loadPapers();
    }

    loadPapers(): void {
        this.http.get<any[]>('assets/accepted_submissions.json').subscribe(data => {
          this.papers = data.sort((a, b) => a.id - b.id); 
        });
    }

}
