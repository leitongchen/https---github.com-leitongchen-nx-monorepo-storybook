import { Component } from '@angular/core';
import { exampleProducts } from '@storybook/products';

@Component({
  selector: 'storybook-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'john';
  products = exampleProducts;
}
