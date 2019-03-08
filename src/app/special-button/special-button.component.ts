import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-special-button',
  templateUrl: './special-button.component.html',
  styleUrls: ['./special-button.component.css']
})
export class SpecialButtonComponent implements OnInit {
  @Input() color:string;
  @Input() text:string;
  
  constructor() { }

  ngOnInit() {
  }

}
