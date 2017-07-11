import { Directive, ElementRef, Renderer, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appWordroll]'
})
export class WordrollDirective implements AfterViewInit {

    private words:any = ["hallo", "bla"]
    
  constructor(private elRef: ElementRef) { }
   
    ngAfterViewInit(){
        // Use renderer to render the emelemt with styles
       /* while(true) {
            this.elRef.nativeElement.text = this.words[0];
            }*/this.elRef.nativeElement.html = 'bla';
    }
}
