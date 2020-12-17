import { DOCUMENT } from '@angular/common';
import { DataService } from './../data.service';
import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
    


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataS: DataService ,@Inject(DOCUMENT) document) { }

  items ;

  ngOnInit(): void {
    $.getScript("../assets/style.js")
   
    this.dataS.getItems().subscribe(items => this.items = items);
    this.dataS.getSelectedItems("");
    

  }

  onChose(e, str)
  {

    console.log(str)
    this.dataS.getSelectedItems(str);
   
  }

  
  



}
