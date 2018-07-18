import { Component, OnInit, HostListener, ElementRef, Output, EventEmitter, HostBinding,  } from '@angular/core';
import { trigger, query, state, style, transition, animate, keyframes, stagger, group, animateChild } from '@angular/animations';
import { easeOutQad, easeOutExpo } from './../../animations/easing';

const slideUp = {transform: 'translateY(-100vh)'};
const fadeInUp = {opacity: 0, transform: 'translateY(30vh)'};
const initFadeInUp = {opacity: 1, transform: 'translateY(0)'};
const initSlideUp = {transform: 'translateY(0)'};

const textIn = {transform: 'translateY(0)'};
const textOut = {transform: 'translateY(100%)'};
// const initSlideUp = {transform: 'translateY(0)'};

@Component({
  moduleId: module.id.toString(),
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('introHome', [
      transition(':enter', [
        query('.section__intro', style(slideUp)),
        query('.section__intro__title .lines', [
          query('.worlds', style(textOut))
        ]),
        query('.section__intro', [
          animate(easeOutExpo(1200), style(initSlideUp))
        ]),
        query('.section__intro__title .lines', [
          stagger(250, [
            query('.worlds', [
              stagger(100, [
                animate(easeOutQad(550), style(textIn)),
              ])
            ])
          ])
        ])
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  @HostBinding('@introHome')
  private currentSectionName: string = null;
  public textLines: Array<string>;
  public worksLine = [];
  private text = 'Hello, i’m Rafael Santiago<br>I’m Product designer<br>focused in Visual Design';
  itens_per_line = 2;

  state = 'small';

  recentsWorks = [
    {
      client: 'Bonafont em Casa',
      service: 'Delivery de Agua',
      image: 'assets/images/bonafont@2x.png'
    },
    // {
    //   client: 'C&A Modas',
    //   service: 'Ecommerce redesign',
    //   image: 'assets/images/ce-a@2x.png'
    // },
    // {
    //   client: 'Movida',
    //   service: 'Aluguel de carros',
    //   image: 'assets/images/movida@2x.png'
    // }
    // ,
    // {
    //   client: 'Vaimoto',
    //   service: 'Peça um motoboy',
    //   image: 'assets/images/vaimoto@2x.png'
    // }
  ];

  @Output() position = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.worksLine = this.getWorksByLine();
    this.textLines = this.text.split('<br>');
    this.state = 'large';
  }

  animateMe() {

    this.state = (this.state === 'small' ? 'large' : 'small');
    console.log('clique');
  }

  private getWorksByLine(): Array<Object> {
    const worksLine = [];

    this.recentsWorks.forEach((value, index) => {
      if (index % 2 === 0) {
        const nextItem = index + 1;

        if (nextItem < this.recentsWorks.length) {
          worksLine.push([value, this.recentsWorks[nextItem]]);
        } else {
          worksLine.push([value]);
        }
      }
    });
    return worksLine;

  }

  public getWorlds(text: string): Array<string> {
    return text.split(' ');
  }
  public inview(event): void {
    console.log(':: inview:: ', event);
  }

  // @HostListener( 'window:scroll', [])
  // onWindowScroll() {
  //   return;
  //   // if (this.section.indexOf('about') !== -1) {
  //   //   return;
  //   // }
  //   // const margin = 50;
  //   // const offset: number = (window.innerHeight - window.pageYOffset) - margin;
  //   // this.reverse = offset <= 0;
  // }
}
