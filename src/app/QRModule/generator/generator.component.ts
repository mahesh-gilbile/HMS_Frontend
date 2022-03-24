import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  constructor() {
    this.level = "L";
    this.width = 150;
  }

  public qrdata =  null;
  public level: "L" | "M" | "Q" | "H";
  public width: number;

  gcf = null;
  placeHolderValue = "enter";
  value = null;
  createQR = false;


  ngOnInit(): void {
  }

  gcfChange(n){
    this.value = null;
    this.createQR = false;
    this.gcf = n;
    console.log(this.gcf)
    if(n === 'url'){
      this.placeHolderValue = "Enter " + n;
    }else{
      this.placeHolderValue = "Enter " + n;
    }
  }

  create(){
    this.createQR = true;
    var data = {
      'gcf' : this.gcf,
      'message' : this.value
    }

    this.qrdata = JSON.stringify(data);
  }







}
