import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  @Input() data;
  constructor(public router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data.currentValue) {
      console.log(this.data);
    }
  }

  ngOnInit(): void {}

  toDetails(id) {
    this.router.navigate([`details/${id}`]);
  }
}
