import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;
  title = 'practice';


  constructor(

    private sidenavService: SidenavService,


  ) { }

  ngOnInit() {
    this.sidenavService.sideNavToggled$
      .subscribe(() => {
        if(this.sidenav)
          this.sidenav.toggle();
      });

  }
}
