import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataTableComponent } from './home/section/data-table/data-table.component';
import { PaginationComponent } from './home/section/pagination/pagination.component';
import { ModelSearchComponent } from './home/section/model-search/model-search.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeContainerComponent } from './home/Homecontainer/container.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    PaginationComponent,
    ModelSearchComponent,
    HomeContainerComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
