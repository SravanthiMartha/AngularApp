import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginRoutingModule} from './login.routing'
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
  ]
})
export class LoginModule {}