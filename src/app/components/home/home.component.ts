import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isClicked: Boolean = false;
  dataBinding: string = "hello world";
  constructor() { }

  ngOnInit() {
  }

  /**
   * Events show
   */
  show() {
    this.isClicked = true;
  }

  /**
  * Events hide
  */
  hide() {
    this.isClicked = false;
  }

  /**
   * lifecycle-hooks
   */
  ngOnDestroy() {
    console.log("destroy");
  }



}
