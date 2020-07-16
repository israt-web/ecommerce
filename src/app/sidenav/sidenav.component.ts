import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closed = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  closeNav() {
    this.closed.emit();
  }
}
