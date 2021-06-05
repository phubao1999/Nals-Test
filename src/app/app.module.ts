import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataTableComponent } from './shared/components/data-table/data-table.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { ModelSearchComponent } from './shared/components/model-search/model-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    PaginationComponent,
    ModelSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
