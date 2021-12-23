import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../productModel';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productService:ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');   
    this.router.navigate(['/products']) 

    this.productService.delete(id !== null ? id : '').subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso')
    });
    
   
  }


}
