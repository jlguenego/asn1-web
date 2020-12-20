import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { derDefault } from 'src/data/default';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  f = new FormGroup({
    der: new FormControl(derDefault),
  });

  constructor() {}

  ngOnInit(): void {}
}
