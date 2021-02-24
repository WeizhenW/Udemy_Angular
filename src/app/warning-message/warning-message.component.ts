import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-message',
  template: `<h3>I'm the warning !!!</h3>`,
  styles: [`
    h3 {
        color: yellow;
        background-color: red;
    }
  `]
})
export class WarningMessageComponent {
}