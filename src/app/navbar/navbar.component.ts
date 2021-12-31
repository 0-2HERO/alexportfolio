import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed: boolean = true;

  constructor() { }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
    let navbutton: HTMLElement = document.getElementById("mobile-menu-button")!;
    if (this.isCollapsed === true) {
      navbutton.classList.remove('opened');
    } else if (this.isCollapsed === false){
      navbutton.classList.add('opened');
    }
  }

  ngOnInit(): void {
  }

}
