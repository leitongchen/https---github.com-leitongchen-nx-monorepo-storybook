import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  private _type!: string;

  @Input()
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value;
  }
}
