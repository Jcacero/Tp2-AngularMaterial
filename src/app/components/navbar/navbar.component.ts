import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { ShareSheetComponent } from '../share-sheet/share-sheet.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public megusta: boolean =false;
  colorEstado='red';

  constructor(private _bottomSheet: MatBottomSheet) { }
  openBottomSheet(): void {
    this._bottomSheet.open(ShareSheetComponent);
  }
  ngOnInit(): void {
  }

  darlike(){
    this.megusta=true;
  }

  
}
