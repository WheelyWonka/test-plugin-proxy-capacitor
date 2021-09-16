import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { App, AppInfo } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  it('should get app info version', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.debugElement.componentInstance;

    spyOn(Capacitor, 'isNativePlatform').and.returnValue(true);
    spyOn(App, 'getInfo').and.resolveTo({version: '9.9.9'} as AppInfo);

    component.ngOnInit();

    // We can see here that App is a Proxy.
    console.log(App);

    // Capacitor isNativePlatform is correclty spyied on, because not a Proxy ?
    expect(Capacitor.isNativePlatform()).toBeTrue();

    // Here, App getInfo is not spied on, because is a Proxy ?
    // Error: <toHaveBeenCalled> : Expected a spy, but got Function.
    expect(App.getInfo).toHaveBeenCalled();
  });

});
