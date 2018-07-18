import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public reverse: boolean;
  private section: string;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.section = val.url;
        this.reverse =  (this.section.indexOf('about') !== -1 || this.section.indexOf('quem-somos') !== -1 );
      }
    });
   }

  ngOnInit() {
  }
  @HostListener( 'window:scroll', [])
  onWindowScroll() {
    if (this.section.indexOf('about') !== -1) {
      return;
    }
    const margin = 50;
    const offset: number = (window.innerHeight - window.pageYOffset) - margin;
    this.reverse = offset <= 0;
  }
}
