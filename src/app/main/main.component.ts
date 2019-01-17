import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter: number = 0;
  flagMain: boolean = true;
  flagSecondChild: boolean = false;
  // hideMainComponent: boolean = false;

  displayCounter(value) {
    console.log(value, "value in main component");
    this.counter = value;
  }

  displayFlag(flag) {
    console.log(flag, "flag in main component");
    this.flagMain = flag;
  }

  showSecondChild() {
    this.flagSecondChild = true;
    // this.hideMainComponent = true;
    console.log(this.flagSecondChild, "flagSecondChild");
    // console.log(this.hideMainComponent, "hideMainComponent");

  }
  displayFlagSecondChild(flagSecondChild) {
    console.log(flagSecondChild,"flagSecondChild");
    this.flagSecondChild = flagSecondChild;
  }
}
