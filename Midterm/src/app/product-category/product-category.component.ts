import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-category',
  standalone: true,
  template: `
    <div class="col-sm-6">
      <p>{{ categoryName }}</p>
      <img [src]="imageUrl" [alt]="categoryName">
    </div>
  `,
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  @Input() categoryName: string = '';
  @Input() imageUrl: string = '';
}