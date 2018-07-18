import { Directive, ElementRef, Renderer, Input, OnInit, HostBinding } from '@angular/core';
import { trigger, query, state, style, transition, animate, keyframes, stagger } from '@angular/animations';

const fadeOutUp = {opacity: 0};
const fadeInUp = {opacity: 1};
const easeInFor = (duration) => `${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`;

@Directive({
  selector: '[appMovingLetter]'
})


export class MovingLetterDirective implements OnInit {

  @Input() text: string;
  // @Input() breakLines: Array<string>;
  // private text: String;
  // @Input() appMovingLetter: boolean;
  @HostBinding('@movingLetter') 'movingLetter' = 'simpleState';

  constructor(private el: ElementRef, private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'display', 'none');
  }


  ngOnInit() {
    const tempArr: Array<string> = this.text.split('<br>');
    // this.text = this.el.nativeElement.innerHTML;
    console.log();

    let html: string;
    for (let i = 0; i < tempArr.length; i++) {
    //   if (i === 0) {
    //     tempArr = this.text.split(this.breakLines[i]);
    //     tempArr[i] = tempArr[i] + this.breakLines[i];
    //   } else {
    //     console.log('else', );
    //     tempArr.push(tempArr[i].split(this.breakLines[i]))
    //   }
    //   console.log(this.breakLines[i]);
    }

    tempArr.forEach((item, index) => {
      if (html === undefined) {
        html = this.templateLine(item);
      } else {
        html += this.templateLine(item);
      }
      console.log(item);
      // tempArr = this.text.split(item);
    });

    console.log(html);
    this.el.nativeElement.innerHTML = html;
    // `<div>a${this.text}</div>
    // <div>b</div>
    // <div>c</div>`;
    // console.log(this.myHidden);
    // if (this.myHidden) {
    //   console.log('hidden');
    //   this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    // }
  }

  templateLine(text): string {
    console.log(text);
    return `<div class="line"><span class="line__animate">${text}</span></div>`;
  }



}
