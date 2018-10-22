import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { RouterModule } from '@angular/router';
import { appMainRoutes } from './app-main.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appMainRoutes)
  ],
  declarations: [AppTopbarComponent]
})
export class AppMainModule { }
