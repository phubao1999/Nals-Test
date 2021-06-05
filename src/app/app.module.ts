import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataTableComponent } from './views/home/section/data-table/data-table.component';
import { PaginationComponent } from './views/home/section/pagination/pagination.component';
import { ModelSearchComponent } from './views/home/section/model-search/model-search.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeContainerComponent } from './views/home/Homecontainer/container.component';
import { DetailsComponent } from './views/details/details.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    PaginationComponent,
    ModelSearchComponent,
    HomeContainerComponent,
    DetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
