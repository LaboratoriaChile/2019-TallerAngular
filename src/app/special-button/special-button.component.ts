import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-special-button',
  templateUrl: './special-button.component.html',
  styleUrls: ['./special-button.component.css']
})
export class SpecialButtonComponent implements OnInit {
  @Input() buttonProperties:any;
  @Input() text:string;
  @Output() clickHandlerEV:EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {

  }

  handleClick(){
    this.buttonProperties.color = 'red';
    this.clickHandlerEV.emit("holi, soy un componente hijo");
  }
}
