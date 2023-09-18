import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public items = [
    { name: 'Item 1', id: 10 },
    { name: 'Item 2', id: 20 },
    { name: 'Item 3', id: 30 },
  ];

  constructor() {}

  ngOnInit() {}
}
