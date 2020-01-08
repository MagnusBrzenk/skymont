import { Component, OnInit } from '@angular/core';
import { DataService } from './core/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'explorer';

  dataSubscription: Subscription;

  constructor(private dataService: DataService) {
    //
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('>>> Getting data');
      this.dataSubscription = this.dataService.getData().subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log('^^^^^^^^^^^^^');
          console.log(err);
        }
      );
    }, 3000);
  }
}
