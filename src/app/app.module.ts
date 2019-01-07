import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { CurrentGraphicsComponent } from './current-graphics/current-graphics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditOpeningComponent } from './edit-opening/edit-opening.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    CurrentGraphicsComponent,
    PageNotFoundComponent,
    EditOpeningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
