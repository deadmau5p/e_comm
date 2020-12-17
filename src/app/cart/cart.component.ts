import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bag:Array<any>;

  constructor(private dataS : DataService) { }


  ngOnInit(): void {
    this.bag = this.dataS.getBagCheck()
  }


  getTotalPrice()
  {
    
    var total = 0;
    console.log(this.bag.length)
    console.log()
    for(var i = 0; i < this.bag.length;i++)
    {
      total = total +  this.bag[i].cena;
      console.log(total)
    }
    

    return total;
  }


  

}
