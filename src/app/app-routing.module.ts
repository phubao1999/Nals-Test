import { HomeContainerComponent } from './home/Homecontainer/container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}