import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alurapic';

  photos:Object[] = [];

  constructor(http: HttpClient) {
    // esse é o método inteiro usando o observable
    // const observable = http.get('http://localhost:3000/flavio/photos');
    // observable.subscribe();

    // esse é o método resumido
    http
      .get<Object[]>('http://localhost:3000/flavio/photos')
      .subscribe(
        photos => this.photos = photos
      );

    // pesquisar
  }
}
