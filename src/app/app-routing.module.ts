import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './main-container/about/about.component';
import { ContactComponent } from './main-container/contact/contact.component';
import { HomeComponent } from './main-container/home/home.component';
import { MyTableComponent } from './main-container/my-table/my-table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'catalog', component: MyTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
