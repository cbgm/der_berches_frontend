import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideonscroll]'
})
export class HideonscrollDirective {
        
     public hide: boolean = false;

  constructor() { }

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
