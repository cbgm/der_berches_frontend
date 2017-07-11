import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TimelineDirective } from './directives/timeline.directive';
import { WaypointComponent } from './components/waypoint/waypoint.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ScrollhideComponent } from './components/scrollhide/scrollhide.component';
import { HideonscrollDirective } from './directives/hideonscroll.directive';
import { WordrollDirective } from './directives/wordroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    TimelineDirective,
    WaypointComponent,
    TimelineComponent,
    ScrollhideComponent,
    HideonscrollDirective,
    WordrollDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
