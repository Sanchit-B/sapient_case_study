import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaceholderDirective } from '../placeholder.directive';
import { AlertComponentComponent } from './alert-component/alert-component.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {

  @ViewChild(PlaceholderDirective, {static: false}) alertHolder: PlaceholderDirective;

  closeSub: Subscription;
  constructor(
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  showAlert(mssg: string) {
    const componentFactory = this.cfr.resolveComponentFactory(AlertComponentComponent);

    const vcRef = this.alertHolder.vcRef;
    vcRef.clear();

    const componentRef = vcRef.createComponent(componentFactory);

    componentRef.instance.message = mssg;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      vcRef.clear();
    })
  }

}
