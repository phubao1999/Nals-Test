import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeContainerComponent } from './views/home/Homecontainer/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
