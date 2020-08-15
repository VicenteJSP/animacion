import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-typedjs',
  templateUrl: './typedjs.component.html',
  styleUrls: ['./typedjs.component.scss']
})
export class TypedjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let typed = new Typed('.element', {
      strings: [
        '>',
        '>Próximamente ...',
        '>VicenteJSP'
      ],
      typeSpeed: 100,
      backSpeed: 0,
      cursorChar: '✍',
      shuffle: true,
      loop: true
    });

  }

}
