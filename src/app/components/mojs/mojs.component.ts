import { Component, OnInit } from '@angular/core';
import mojs from '@mojs/core';

@Component({
  selector: 'app-mojs',
  templateUrl: './mojs.component.html',
  styleUrls: ['./mojs.component.scss']
})
export class MojsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    new mojs.Shape({
      parent: '#bouncy_circle',
      shape: 'circle',
      fill: { '#334752': '#46B39D' },
      radius: { 80: 280 },
      duration: 2000,
      isYoyo: true,
      isShowStart: true,
      easing: 'elastic.inout',
      repeat: 1,
    })
      .then({
        fill: { '#46B39D' : '#F0CA4D' },
        radius: { 80: 280 },
        duration: 2000,
        isYoyo: true,
        isShowStart: true,
        easing: 'elastic.inout',
        repeat: 1,
      })
      .then({
        fill: { '#F0CA4D': '#E37332' },
        radius: { 80: 280 },
        duration: 2000,
        isYoyo: true,
        isShowStart: true,
        easing: 'elastic.inout',
        repeat: 1,
      })
      .then({
        fill: { '#E37332': '#DE4F3C' },
        radius: { 80: 280 },
        duration: 2000,
        isYoyo: true,
        isShowStart: true,
        easing: 'elastic.inout',
        repeat: 1,
      })
      .play()
      .replay();


  }

}
