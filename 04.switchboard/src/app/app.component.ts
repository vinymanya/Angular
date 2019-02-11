import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';

  switches:boolean[] = [true, true, true, true, true, true, true, true, true, true];

  turnSwitch(i){
    this.switches[i] = !this.switches[i];
  }
}
