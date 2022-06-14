import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-share-sheet',
  templateUrl: './share-sheet.component.html',
  styleUrls: ['./share-sheet.component.css']
})
export class ShareSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ShareSheetComponent>) { }


  ngOnInit(): void {
  }

}
