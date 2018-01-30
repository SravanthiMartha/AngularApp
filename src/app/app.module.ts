import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {routing} from './app.routing';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import {TopnavComponent} from './dashboard/topnav/topnav.component';
import {SidenavComponent} from './dashboard/sidenav/sidenav.component';
import {FooterComponent} from'./dashboard/footer/footer.component';
import {ContentComponent} from './dashboard/content/content.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TopnavComponent,
    SidenavComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
