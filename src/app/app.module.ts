import { NgModule } from '@angular/core';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from './products.service';
import { CounterService } from './counter-service/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    FloatingBannerComponent,
    ECommerseComponent,
    HighlighterDirective,
    UnlessDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
  ],
  providers: [
    ProductsService,
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
