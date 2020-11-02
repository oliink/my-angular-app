import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'         // import component
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './main-container/home/home.component';
import { AboutComponent } from './main-container/about/about.component';
import { ContactComponent } from './main-container/contact/contact.component';
import { MyTableComponent } from './main-container/my-table/my-table.component';

@NgModule({
  declarations: [
    AppComponent,                       // components for app
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MyTableComponent
  ],
  imports: [                           // массив подключаемых модулей
    BrowserModule,                     // адаптирует app  для браузера, обязат. модуль
    AppRoutingModule                   // маршрутизация
  ],
  providers: [],
  bootstrap: [AppComponent]            // one component for index.html
})
export class AppModule { }
