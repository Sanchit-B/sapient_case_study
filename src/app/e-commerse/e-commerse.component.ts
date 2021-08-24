import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-e-commerse',
  templateUrl: './e-commerse.component.html',
  styleUrls: ['./e-commerse.component.css']
})
export class ECommerseComponent implements OnInit {

  products:any = [];
  gridView = true;
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res:any) => {
      this.products = res;
    })
  }

  changeView() {
    this.gridView = !this.gridView;
    console.log(this.gridView);
    
  }

}
