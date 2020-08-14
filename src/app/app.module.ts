import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MojsComponent } from './components/mojs/mojs.component';
import { TypedjsComponent } from './components/typedjs/typedjs.component';
import { VivusComponent } from './components/vivus/vivus.component';
import { ScrollRevealComponent } from './components/scroll-reveal/scroll-reveal.component';
import { LottieComponent } from './components/lottie/lottie.component';

@NgModule({
  declarations: [
    AppComponent,
    MojsComponent,
    TypedjsComponent,
    VivusComponent,
    ScrollRevealComponent,
    LottieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
