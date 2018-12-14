import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { NotesService } from './notes.service';

@NgModule({
  declarations: [ AppComponent, HeaderComponent ],
  imports: [ BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule,
    MatCardModule, MatButtonModule, MatInputModule, MatExpansionModule, MatToolbarModule,
    MatFormFieldModule ],
  providers: [ NotesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
