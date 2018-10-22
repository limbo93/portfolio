import { Component, OnInit } from '@angular/core';
import { ProfessionalSkill } from 'src/app/services/domain/professional.skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  professionalSkill: ProfessionalSkill = new ProfessionalSkill();

  constructor() { }

  ngOnInit() {
  }

}
