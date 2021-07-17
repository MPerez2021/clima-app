import { DialogData } from './../app.component';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-coordenadas',
  templateUrl: './coordenadas.component.html',
  styleUrls: ['./coordenadas.component.css']
})
export class CoordenadasComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
