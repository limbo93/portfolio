import { Component, OnInit } from '@angular/core';
import { BasicInforMation } from 'src/app/services/domain/basic-information.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  basicInforMation: BasicInforMation = new BasicInforMation();

  constructor() { }

  ngOnInit() {
  }

}
