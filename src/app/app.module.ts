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
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



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
    ContactComponent,
    FooterComponent,
    ResponsiveMenuComponent,
    
   
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        defaultLanguage: 'en',
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
