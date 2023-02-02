import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './dataview/data.component';

const routes: Routes = [
  { path: '', redirectTo: '/dataview', pathMatch: 'full' },
  { path: 'dataview', component: DataComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
