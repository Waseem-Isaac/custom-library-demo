import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-custom-lib',
  template: `
    <p>
      Hello from {{libName}}!
    </p>
  `,
  styles: []
})
export class MyCustomLibComponent implements OnInit {
  libName = 'My custom library'

  constructor() { }

  ngOnInit() {
  }

}
