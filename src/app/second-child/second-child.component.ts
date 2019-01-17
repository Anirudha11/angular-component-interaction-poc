import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flagShowDialog: boolean = false;
  @Input() flagSecondChild: boolean;
  // @Input() hideMainComponent : boolean;
  @Output() flagSecondChildChange = new EventEmitter();

  flagSecondChildChanged() {
    console.log("Second child component");
    if (this.flagSecondChild === true) {
      this.flagSecondChild = false;

    }
    else {
      this.flagSecondChild = true;
    }
    this.flagSecondChildChange.emit(this.flagSecondChild);
  }

  flagSecondChildUnChanged() {
    // this.flagSecondChildChange.emit(this.flagSecondChild);   
     console.log(this.flagShowDialog,"flagShowDialog");

    if (this.flagShowDialog === true) {
      this.flagShowDialog = false;
    }
    console.log(this.flagShowDialog,"flagShowDialog");
  }

  flagShowDialogChanged() {
    console.log(this.flagShowDialog,"flagShowDialog");

    if (this.flagShowDialog === false) {
      this.flagShowDialog = true;
    }
    console.log(this.flagShowDialog,"flagShowDialog");
  }

}
