import { DialogData } from './../app.component';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla-clima',
  templateUrl: './tabla-clima.component.html',
  styleUrls: ['./tabla-clima.component.css']
})
export class TablaClimaComponent implements OnInit {

 
  constructor(@Inject (MAT_DIALOG_DATA) public data: DialogData) {
  
   }

  ngOnInit(): void {
  }

}
