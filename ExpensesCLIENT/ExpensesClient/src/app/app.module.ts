import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntriesComponent } from './entries/entries.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


//Services
import { EntryService } from './entry.service';
import { from } from 'rxjs';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

//forms
import { ReactiveFormsModule } from '@angular/forms';

//Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, MatTableModule, MatToolbarModule} from '@angular/material';
import { NewEntryComponent } from './new-entry/new-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    HeaderComponent,
    FooterComponent,
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    BrowserAnimationsModule, MatButtonModule, MatTableModule,
    MatInputModule, MatCardModule, MatSelectModule, ReactiveFormsModule, MatToolbarModule
    
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})


export class AppModule { }
