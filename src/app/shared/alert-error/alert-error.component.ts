import { Component, input } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  imports: [],
  templateUrl: './alert-error.component.html',
})
export class AlertErrorComponent {
  messageError = input.required<String>()
}
