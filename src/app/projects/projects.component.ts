import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent, SecondPage, ThirdPage, FourthPage, FifthPage, SixesPage, SeventhPage, EightPage, NinthPage, TenthPage, TwelfthPage, ThirteenthPage, FourteenthPage, EleventhPage } from '../dialog/dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  isCollapsed: boolean = true;

  constructor(public dialog: MatDialog) { }

  toggleDiv() {
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
    let projectbutton: HTMLElement = document.getElementById("mobile-project-button")!;
    if (this.isCollapsed === true) {
      projectbutton.classList.remove('opened');
    } else if (this.isCollapsed === false){
      projectbutton.classList.add('opened');
    }
  }

  
  openDialog(){
    this.dialog.open(DialogComponent);
   }
  
  openDialog2(){
    this.dialog.open(SecondPage);
   }
  openDialog3(){
    this.dialog.open(ThirdPage);
   }
  openDialog4(){
    this.dialog.open(FourthPage);
   }
  openDialog5(){
    this.dialog.open(FifthPage);
   }
  openDialog6(){
    this.dialog.open(SixesPage);
   }
  openDialog7(){
    this.dialog.open(SeventhPage);
   }
  openDialog8(){
    this.dialog.open(EightPage);
   }
  openDialog9(){
    this.dialog.open(NinthPage);
   }
   
  openDialog10(){
    this.dialog.open(TenthPage);
   }

   openDialog11(){
    this.dialog.open(EleventhPage);
   }

   openDialog12(){
    this.dialog.open(TwelfthPage);
   }

   openDialog13(){
    this.dialog.open(ThirteenthPage);
   }

   openDialog14(){
    this.dialog.open(FourteenthPage);
   }

  ngOnInit(): void {
  }

}
