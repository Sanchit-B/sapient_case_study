import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-e-commerse',
  templateUrl: './e-commerse.component.html',
  styleUrls: ['./e-commerse.component.css']
})
export class ECommerseComponent implements OnInit {

  products:any = [];

  filteredProducts:any = [];
  gridView = true;
  pricelist = [
    {value: 'None'},
    {value: '100'},
    {value: '500'},
    {value: '1000'}
  ];

  isLoading = false;
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.productService.getProducts().subscribe((res:any) => {
      this.products = res;
      this.isLoading = false;
      this.filteredProducts = this.products.slice();
    })
  }

  changeView() {
    this.gridView = !this.gridView;
  }

  filterList($event) {
    if($event.isUserInput && $event.source.value !== 'None') {
      let filterPrice = $event.source.value;
      this.filteredProducts = this.products.filter(product => {
        return product.price < filterPrice
      });
    } else if($event.isUserInput && $event.source.value === 'None') {
      this.filteredProducts = this.products.slice();
    }
  }
}
