import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { RouterModule } from '@angular/router';
import { appMainRoutes } from './app-main.routes';
import { AppMainComponent } from './app-main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appMainRoutes)
  ],
  declarations: [
    AppMainComponent,
    AppTopbarComponent
  ]
})
export class AppMainModule { }
