import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  appInfoVersion = 'Unavailable';

  constructor() {}

  async ngOnInit() {
    if (Capacitor.isNativePlatform()) {
      this.appInfoVersion = (await App.getInfo()).version;
    }
  }
}
