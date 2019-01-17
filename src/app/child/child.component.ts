import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() counter: number;
  @Output() valueChange = new EventEmitter();

  // valueChanged() {
  //   // this.counter = this.counter + 1;
  //   this.valueChange.emit(this.counter);
  // }
  displayCounter(value) {
    console.log(value, "value in Child Component");
    this.counter = value;
    this.valueChange.emit(this.counter);
  }

}
