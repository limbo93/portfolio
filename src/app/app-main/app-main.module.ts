import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { RouterModule } from '@angular/router';
import { appMainRoutes } from './app-main.routes';
import { AppMainComponent } from './app-main.component';
import { AboutComponent } from './about/about.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ReferenceComponent } from './reference/reference.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appMainRoutes)
  ],
  declarations: [
    AppMainComponent,
    AppToolbarComponent,
    AboutComponent,
    AppFooterComponent,
    ReferenceComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillComponent
  ]
})
export class AppMainModule { }
