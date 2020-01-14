import { Component, OnInit } from '@angular/core';
import { DataService } from './core/data.service';
import { Subscription } from 'rxjs';

declare const lightGallery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'explorer';

  dataSubscription: Subscription;

  isLoaded = false;

  constructor(private dataService: DataService) {
    //
  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;

      //

      lightGallery(document.getElementById('lightgallery'));
    }, 0);
  }
}
