import { Component } from '@angular/core';

@Component({
  selector: 'isd-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
})
export class GreetingsComponent {
  name: string;
  inputText: string;
  constructor() {
    this.name = 'Pepe';
    this.inputText = 'Dinos tu nombre';
  }

  handleClick(ev: Event) {
    this.name = '';
    console.log(ev);
  }
}
