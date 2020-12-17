import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;

  constructor(private dataS : DataService) { }

  
  ngOnInit(): void {
  }


  onAddToBag(e, item)
  {
    this.dataS.sendToBag(item)
  }

}
