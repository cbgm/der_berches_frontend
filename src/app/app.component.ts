import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    public hide: boolean = false;
    public show: boolean = true;

    @HostListener("window:scroll", [])
    onWindowScroll() {

        let Test = window.pageYOffset;
        if (Test > 50) {
            console.log(Test);
            this.hide = true;
            this.show = false;
        } else if (this.hide && Test < 50) {
            this.hide = false;
            this.show = true;
        }

    }
}
