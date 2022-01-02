import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  isCollapsed: boolean = true;

  constructor() { }

  toggleSkills() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
    let skillsbutton: HTMLElement = document.getElementById("skills-button")!;
    if (this.isCollapsed === true) {
      skillsbutton.classList.remove('opened');
    } else if (this.isCollapsed === false){
      skillsbutton.classList.add('opened');
    }
  }

  ngOnInit() {
  }

}
