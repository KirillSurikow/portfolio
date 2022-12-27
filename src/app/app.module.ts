import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialMediaBlockComponent } from './social-media-block/social-media-block.component';

import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioHeadlineComponent } from './portfolio-headline/portfolio-headline.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectJoinComponent } from './project-join/project-join.component';
import { ProjectPolloLocoComponent } from './project-pollo-loco/project-pollo-loco.component';
import { ProjectRingOfFireComponent } from './project-ring-of-fire/project-ring-of-fire.component';
import { ProjectPokedexComponent } from './project-pokedex/project-pokedex.component';
import { ProjectCrmComponent } from './project-crm/project-crm.component';
import { ContactHeadlineComponent } from './contact-headline/contact-headline.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    HeaderComponent,
    IntroductionComponent,
    SocialMediaBlockComponent,
    SkillsComponent,
    PortfolioComponent,
    PortfolioHeadlineComponent,
    AboutMeComponent,
    ProjectJoinComponent,
    ProjectPolloLocoComponent,
    ProjectRingOfFireComponent,
    ProjectPokedexComponent,
    ProjectCrmComponent,
    ContactHeadlineComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
