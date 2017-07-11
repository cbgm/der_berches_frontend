import { Component, OnInit, HostListener } from '@angular/core';
import { WaypointComponent } from '../../components/waypoint/waypoint.component';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    @HostListener('window:scroll', ['$event'])
onWindowScroll($event) {
    console.log("scrolling...");
}
}
