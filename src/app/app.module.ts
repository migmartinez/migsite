import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavToggleComponent } from './side-nav-toggle/side-nav-toggle.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomeComponent,
    SidepanelComponent,
    TopNavComponent,
    SideNavToggleComponent,
    HomepageComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [HomeComponent, SidepanelComponent]
})
export class AppModule { }
