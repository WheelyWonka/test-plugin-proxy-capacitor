#Test Plugin Proxy Capacitor

## Issue link: 

This repo has been created to communicate with the Capacitor's community in order to try to find a way to mock Capacitor's plugins that are Proxied.

As you can see in the `app.component.spec.ts`, I try to mock (spyOn) two methods from different Capacitor's plugins:

- `isNativePlatform`, coming from `@capacitor/core`, this one is not Proxied: here mocking is a success
- `getInfo`, coming from `@capacitor/app`, this one is Proxied: in this case mocking is a failure

I tried the solution proposed here: https://github.com/ionic-team/cap-plugin-mock-jasmine but with no success. It seems that I need to mock a lot of things to test one call to a method exposed by a Capacitor's Plugin. I find this way of doing test kinda weird, what happens if Capacitor is updating something I mocked in the first place, written tests will become wrong ? If someone have the time to clarify this philospphy to me, it would be awesome. 

Thank you for your time !
