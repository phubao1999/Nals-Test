import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class HomeContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  searchData(data) {
    console.log(data);
  }
}
