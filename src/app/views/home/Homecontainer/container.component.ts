import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-home-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class HomeContainerComponent implements OnInit {
  filterDataOrigin = {
    entries: 5,
    search: '',
  };
  dataList;
  constructor(private homeService: HomeService) {
    this.fetchingData(1, this.filterDataOrigin);
  }

  ngOnInit(): void {}

  searchData(dataFilter) {
    this.fetchingData(1, dataFilter);
  }

  fetchingData(page: number, dataFilter) {
    this.homeService
      .getDataHome(page, dataFilter.entries, dataFilter.search)
      .subscribe(
        (res) => {
          this.dataList = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  resetSearchFillter(dataFilter) {
    this.fetchingData(1, dataFilter);
  }
}
