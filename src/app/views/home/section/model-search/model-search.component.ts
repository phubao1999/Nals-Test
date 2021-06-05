import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model-search',
  templateUrl: './model-search.component.html',
  styleUrls: ['./model-search.component.scss'],
})
export class ModelSearchComponent implements OnInit {
  filterData = {
    entries: 5,
    search: '',
  };
  @Output() emitSearchData: EventEmitter<any> = new EventEmitter();
  @Output() emitResetData: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  resetData() {
    this.filterData = {
      entries: 5,
      search: '',
    };
    this.emitResetData.emit(this.filterData);
  }

  searchData() {
    this.emitSearchData.emit(this.filterData);
  }
}
