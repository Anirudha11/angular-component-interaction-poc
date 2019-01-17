import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  constructor() { }

  @Input() counter: number;
  @Input() flagMain: boolean;
  @Output() valueChange = new EventEmitter();
  @Output() flagChange = new EventEmitter();

  valueChanged() {
    // debugger
    console.log("GrandchildComponent")
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }

  flagChanged() {
    console.log("flagMain in GrandchildComponent");
    alert(this.flagMain);
    if (this.flagMain === true) {
      this.flagMain = false;
    }
    else {
      this.flagMain = true;
    }
    this.flagChange.emit(this.flagMain);
  }

  ngOnInit() {
  }

}
