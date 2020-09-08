import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadsComponent } from './uploads/uploads.component'
const routes: Routes =
  [{ path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'upload', component: UploadsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
