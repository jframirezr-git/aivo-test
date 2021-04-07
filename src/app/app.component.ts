import {Component, DoCheck} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'SevenWayOps-Admin';
  btnDisplayMenu: boolean;

   constructor(private route: Router) {}

   // Show Menu button if the screen is difference to /login
   ngDoCheck(): void {
     if (this.route.url === '/login'){
       this.btnDisplayMenu = false;
     }
     else {
       this.btnDisplayMenu = true;
     }
  }
}
