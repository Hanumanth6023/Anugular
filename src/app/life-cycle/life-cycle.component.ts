import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,DoCheck,OnChanges {

  constructor() { 
    console.log("component is initialized");
  }

  ngOnChanges(_changes: SimpleChanges): void{
    console.log("OnChange method is called"+_changes)
  }

  ngOnInit(): void {
    console.log("init method is called...");
  }

  ngDoCheck(): void{
    console.log("check method is called....")
  }

}
