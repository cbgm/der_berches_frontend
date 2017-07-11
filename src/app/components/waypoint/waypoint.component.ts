import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'waypoint',
  template: `
    <div class="waypoint" data-fade='fade'>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./waypoint.component.scss']
})
export class WaypointComponent implements OnInit {
        
  @Input() fade:boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
