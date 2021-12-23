import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../productModel';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null as any,
    id: null as any
  }

  constructor(private productServic: ProductService, private router:Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      routerUrl: '/products/create'
    }
   }

  ngOnInit(): void {
  }
  
  createProduct():void{
        this.productServic.create(this.product).subscribe(() => {
          this.router.navigate(['/products'])
          this.productServic.showMessage('Produto criado com sucesso')

        });
        
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }
  

}
