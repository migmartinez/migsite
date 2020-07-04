import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavToggleComponent } from './side-nav-toggle/side-nav-toggle.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidepanelComponent,
    TopNavComponent,
    SideNavToggleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent, SidepanelComponent]
})
export class AppModule { }
