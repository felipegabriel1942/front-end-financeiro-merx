import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  @Output() onToggle = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  disparaEvento() {
    this.onToggle.emit();
  }
}
