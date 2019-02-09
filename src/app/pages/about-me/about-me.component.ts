import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css',
    '../../../assets/creative.css']
})
export class AboutMeComponent implements OnInit {

  showPortfolio = false;

  buttonTextDefault = 'Get my portfolio!';

  buttonTextClose = 'Hide portfolio';

  constructor() { }

  ngOnInit() {
  }

}
