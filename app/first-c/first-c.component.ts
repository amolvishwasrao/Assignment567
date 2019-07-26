import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-c',
  templateUrl: './first-c.component.html',
  styleUrls: ['./first-c.component.css']
})
export class FirstCComponent implements OnInit {

  constructor() { }

  public StringReference="Marvellous Infosystem";

  public teststring="Marvellous";


  ngOnInit()
  {
    
  }
  Test():string
  {
     return "Marvellous Infosystems";
  }

  ToUpper():string
  {
   
    return this.teststring=this.teststring.toUpperCase();
  }
  ToLower():string
  {

    return this.teststring=this.teststring.toLowerCase();
  }
  fun():string
  {
     return this.StringReference="Education for better tommorow";

  }

}
