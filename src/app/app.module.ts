import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { ECommerseComponent } from './e-commerse/e-commerse.component';
import { MaterialModule } from './material/material.module';
import { HighlighterDirective } from './highlighter.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './dropdown.directive';
import { ProductsService } from './products.service';
import { CounterService } from './counter-service/counter.service';
import { shortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FloatingBannerComponent,
    ECommerseComponent,
    HighlighterDirective,
    UnlessDirective,
    DropdownDirective,
    shortenPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    ProductsService,
    CounterService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
