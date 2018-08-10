import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent
    ],
  imports: [
    BrowserModule,
    DataTablesModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
