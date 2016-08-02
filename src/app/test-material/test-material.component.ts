import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
//import { MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon';


@Component({
  moduleId: module.id,
  selector: 'app-test-material',
  templateUrl: 'test-material.component.html',
  styleUrls: ['test-material.component.css'],
  directives: [
  	MD_BUTTON_DIRECTIVES, 
  	MD_CARD_DIRECTIVES, 
  	MD_CHECKBOX_DIRECTIVES, 
  	MD_GRID_LIST_DIRECTIVES, 
  	//MD_ICON_DIRECTIVES
  ],
})
export class TestMaterialComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
