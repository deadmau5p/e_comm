import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-izdelek',
  templateUrl: './izdelek.component.html',
  styleUrls: ['./izdelek.component.css']
})
export class IzdelekComponent implements OnInit {


  izdelek;

  constructor(private route:ActivatedRoute,private dataS:DataService) { }

  ngOnInit(): void {
    var id  = this.route.url.value[1].path
    this.dataS.getItem(id).subscribe(izdelek => {this.izdelek = izdelek;console.log(izdelek)})
  }

}
