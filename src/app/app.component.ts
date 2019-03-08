import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Taller Angular 2019';
  

  handleClick(){
    this.title = 'Me han presionado el botón';
  }
}
