import { NgModule } from '@angular/core';
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
import { AppSliderImageComponent } from './app-slider-image/app-slider-image.component';
import { SharedModule } from '../common/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(appMainRoutes)
  ],
  declarations: [
    AppMainComponent,
    AppToolbarComponent,
    AppSliderImageComponent,
    AboutComponent,
    AppFooterComponent,
    ReferenceComponent,
    EducationComponent,
    WorkExperienceComponent,
    SkillComponent
  ]
})
export class AppMainModule { }
