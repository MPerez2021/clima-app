import { CoordenadasComponent } from './coordenadas/coordenadas.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TablaClimaComponent } from './tabla-clima/tabla-clima.component';
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    TablaClimaComponent, 
    CoordenadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
