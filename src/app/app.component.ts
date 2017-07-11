import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
     public hide: boolean = false;
    
    @HostListener("window:scroll", [])
  onWindowScroll() {
         
         let Test = window.pageYOffset;
    if (Test > 50) {
        console.log(Test);
        this.hide = true
    } else if (this.hide && Test < 50) {
      this.hide = false;
    }
         
  }
}
