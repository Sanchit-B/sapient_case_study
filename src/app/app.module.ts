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
import { PlaceholderDirective } from './placeholder.directive';
import { AlertComponentComponent } from './dynamic-component/alert-component/alert-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FloatingBannerComponent,
    ECommerseComponent,
    HighlighterDirective,
    UnlessDirective,
    DropdownDirective,
    shortenPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponentComponent
  ]
})
export class AppModule { }
