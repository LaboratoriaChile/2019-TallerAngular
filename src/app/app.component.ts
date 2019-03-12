import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Taller Angular 2019';
  buttonProperties:any = {
    color: 'green',
    text: 'Soy un botón verde'
  };
  

  handleClick(){
    this.title = 'Me han presionado el botón';
  }

  clickHandler(elStringQueRecibimos:string){
    this.buttonProperties.text="Me han tocado el botón con "+elStringQueRecibimos;
  }
}
