import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/services/domain/experience.model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  constructor() { }

  ngOnInit() {
    let exp = new Experience();
    this.experiences = this.experiences.concat(exp).concat(exp).concat(exp);
    // this.experiences = [...this.experiences].concat(exp);
  }

}
