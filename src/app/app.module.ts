import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { DialogComponent, SecondPage, ThirdPage, FourthPage, FifthPage, SixesPage, SeventhPage, EightPage, NinthPage, TenthPage, EleventhPage, TwelfthPage, ThirteenthPage, FourteenthPage  } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    DialogComponent,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SixesPage,
    SeventhPage,
    EightPage,
    NinthPage,
    TenthPage,
    EleventhPage,
    TwelfthPage,
    ThirteenthPage,
    FourteenthPage
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
