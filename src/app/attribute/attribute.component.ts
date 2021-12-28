import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  clr:string="blue";

  x:boolean=true;
  y:boolean=false;





  constructor() { }
  ngOnDestroy():void { 
    console.log('component destroyed') } 
    ngOnInit(): void { }

}
