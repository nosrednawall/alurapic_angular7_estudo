import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alurapic';

  // tslint:disable-next-line:ban-types
  photos: Photo[] = [];

  constructor(photoService: PhotoService) {
    photoService.listFromUser('flavio')
    .subscribe(
      photos => this.photos = photos
    );
  }
}
