import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, query, state, style, transition, animate, keyframes, stagger } from '@angular/animations';

const fadeOutUp = {opacity: 0};
const fadeInUp = {opacity: 1};
const easeInFor = (duration) => `${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`;

@Component({
  selector: 'app-moving-letter',
  templateUrl: './moving-letter.component.html',
  styleUrls: ['./moving-letter.component.scss'],
  // animations: [
  //   trigger('movingLetter', [
  //     state('initial', style(fadeOutUp)),
  //     state('expanded',  style(fadeInUp)),
  //     state('expanded',  style(fadeInUp)),
  //     transition('initial <=> expanded', animate(easeInFor(650)))
  //   ])
  // ]
})
export class MovingLetterComponent implements OnInit {

  // @HostBinding('@movingLetter') 'movingLetter' = 'simpleState';
  public worlds = [];
  public state = 'initial';
  public text: String;
  constructor() { }

  ngOnInit() {
    this.text = 'Hello, i’m Rafael Santiago I’m Product designer focused in Visual Design';
    // this.worlds = this.getWorlds();
    setTimeout(() => {
      this.state = 'expanded';
    }, 5000);
  }

  getWorlds() {
    // const arr = ['']
    console.log();
    // return text.split(' ');
  }

  changeState() {
  }

}
