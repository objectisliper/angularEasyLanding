import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentUrl = '/';
  title = '';

  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        this.currentUrl = val.url;
        switch (val.url) {
          case '/':
            this.title = 'Welcome message';
            break;
          case '/contact-me':
            this.title = 'Contact me by this info!';
            break;
          case '/about-me':
            this.title = 'Information about me';
            break;
        }
      }
    });
  }

}
