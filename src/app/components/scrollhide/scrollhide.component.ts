import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-scrollhide',
  templateUrl: './scrollhide.component.html',
  styleUrls: ['./scrollhide.component.sass']
})
export class ScrollhideComponent implements OnInit {
        
    public hide: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }
    
     @HostListener("window:scroll", [])
  onWindowScroll() {
         
    let number = this.document.body.scrollTop;
         let Test = window.pageYOffset;
    if (Test > 50) {
        console.log(Test);
        this.hide = true
    } else if (this.hide && Test < 50) {
      this.hide = false;
    }
         
  }

}
