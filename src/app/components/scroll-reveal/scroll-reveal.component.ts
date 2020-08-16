import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-scroll-reveal',
  templateUrl: './scroll-reveal.component.html',
  styleUrls: ['./scroll-reveal.component.scss']
})
export class ScrollRevealComponent implements OnInit {

  opt: optScrollReveail;
  constructor() { }

  ngOnInit(): void {
    this.opt = {
      delay: 500,
      duration: 1000,
      reset: true,
      origin: 'right',
      rotate: { x: 100, y: 100, z:100 }
    }
    let scroll = ScrollReveal(this.opt);
    scroll.reveal('.steps-10', { easing: 'steps(10)' });
    scroll.reveal('.steps-20', { easing: 'steps(20)' });
    scroll.reveal('.steps-40', { easing: 'steps(40)' });
    scroll.reveal('.steps-60', { easing: 'steps(60)' });
  }

}

interface optScrollReveail {
  delay?: number;
  distance?: string;
  duration?: number;
  easing?: string;
  interval?: number;
  opacity?: number;
  origin?: string;
  rotate?: {
    x?: number;
    y?: number;
    z?: number;
  };
  scale?: number;
  cleanup?: boolean;
  container?: any;
  desktop?: boolean;
  mobile?: boolean;
  reset?: boolean;
  useDelay?: string;
  viewFactor?: number;
  viewOffset?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  afterReset?: Function;
  afterReveal?: Function;
  beforeReset?: Function;
  beforeReveal?: Function;
}
