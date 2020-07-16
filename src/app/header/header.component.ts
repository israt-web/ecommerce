import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SigninComponent } from '../modules/authentication/components/signin/signin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(  public sidenav: SidenavService,
                public dialog: MatDialog) { }

  ngOnInit() {
  }
login(){
  const dialogRef = this.dialog.open(SigninComponent,{
    width:'400px',
    autoFocus: false,
  }
  );
}
}
