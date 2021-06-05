import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model-search',
  templateUrl: './model-search.component.html',
  styleUrls: ['./model-search.component.scss'],
})
export class ModelSearchComponent implements OnInit {
  @Output() emitSearchData: EventEmitter<any> = new EventEmitter();

  data = {
    entries: 5,
    search: '',
  };
  constructor() {}

  ngOnInit(): void {
  }

  resetData() {
    this.data = {
      entries: 5,
      search: '',
    };
  }

  searchData() {
    this.emitSearchData.emit(this.data);
  }
}
