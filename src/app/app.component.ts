import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    app-servers {
      color: coral;
    }
  `]
})
export class AppComponent {
  title = "myApp";
}
