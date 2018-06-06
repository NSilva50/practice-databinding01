import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  heading = 'Person Details';
  person: any = {
    name: {
      first: 'Michard',
      last: 'Tornado',
    },
    gender: 'Attack Helicopter',
    living: 'homeless'
  };
}
