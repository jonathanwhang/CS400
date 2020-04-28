import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.css']
})
export class QueryResultComponent implements OnInit {
  @Input() title: string;
  @Input() year: string;
  @Input() plot: string;

  result1 = {title: this.title, year: this.year, plot: this.plot};
  result2 = {title: this.title, year: this.year, plot: this.plot};

  results = [this.result1, this.result2];

  constructor() { }

  ngOnInit(): void {
  }

}
