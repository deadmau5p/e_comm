import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  login:Boolean = false;
  bag:Array<any> = [];
  user;

  constructor(private router:Router, private dataS : DataService) { }

  ngOnInit(): void {
    this.dataS.getUser().subscribe(user => this.user = user)
    this.dataS.getBag().subscribe(item => this.bag.push(item))
  }


  cleanUser(e)
  {
    this.dataS.clearUser();
  }

  getTotalPrice()
  {

    var total = 0;
    for(var i = 0; i < this.bag.length;i++)
    {
      total = total +  this.bag[i].cena;
      
    }
    console.log(total)
    

    return total;
  }

  

  

  


  

}
