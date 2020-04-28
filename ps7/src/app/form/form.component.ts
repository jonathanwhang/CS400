import {Component, OnInit, Injectable, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import { QueryResultComponent } from './query-result/query-result.component'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  title: String;
  year: String;
  plot: String;

  constructor(private form: FormBuilder, private http: HttpClient) {
  }

  movieInfo: FormGroup = new FormGroup(
    {
      title: new FormControl(),
      year: new FormControl(),
      plot: new FormControl()
    }
  );

  @ViewChild(QueryResultComponent) child: QueryResultComponent;

  ngOnInit(): void {
  }

  validateForm()
  {
    if (!this.movieInfo.get('title').value)
    {
      alert("Input must be at least one character");
    }
    else
    {
      this.getInfo();
    }
  }

  getInfo() {
    let url = 'http://localhost:3000/ps4/';
    url += `${this.movieInfo.get('title').value.replace(/\s/g, '+')}`;
    const response = this.http.get(url);
    if (response['Response'] === 'False')
    {
      this.title = ''; this.year = ''; this.plot = '';
    }
    else
    {
      this.title = response['Title'];
      this.year = response['Year'];
      this.plot = response['Plot'];
    }
  }
}
