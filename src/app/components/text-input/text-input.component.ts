import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @ContentChild('input')
  inputElement: ElementRef;

  constructor() {}
}
