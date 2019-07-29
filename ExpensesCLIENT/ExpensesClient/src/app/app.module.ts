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

@NgModule({
  declarations: [
    AppComponent,
    EntriesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})


export class AppModule { }
