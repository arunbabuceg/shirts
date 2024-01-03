import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { SupportComponent } from './support/support.component';
import { LookComponent } from './look/look.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FeaturesComponent,
    SupportComponent,
    LookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
