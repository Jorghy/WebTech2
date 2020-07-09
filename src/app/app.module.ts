import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarCreateComponent } from './Cars/car-create/car-create.component';
import { CarListComponent } from './Cars/car-list/car-list.component';
import { ManufacturerListComponent } from './Manufacturers/manufacturer-list/manufacturer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarCreateComponent,
    CarListComponent,
    ManufacturerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
