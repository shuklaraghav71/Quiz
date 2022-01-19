import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { SimpleUserComponent } from './simple-user/simple-user.component';

const routes: Routes = [
  { path: 'Admin', component: AdminComponent },
  { path: '', component: SimpleUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
