import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-app',
  template: `
    <ul>
      <li *ngFor="let item of heroes">
        <a
          ><span>{{ item }}</span></a
        >
      </li>
    </ul>
  `,
  styleUrls: ['./test-app.component.css'],
})
export class TestAppComponent implements OnInit {
  title = 'Teast App';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
  constructor() {}

  ngOnInit(): void {}
}
