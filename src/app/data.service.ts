import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  bag:Array<any> = [];
 
  private subject = new Subject();
  private Bag = new Subject();
 private Items = new Subject();

  constructor(private http:HttpClient) { }


  getItem(id) :Observable<any>
  {
    return this.http.get<any>(`http://localhost:3000/izd/${id}`);
  }

  getUsers(): Observable<any[]> {

    return this.http.get<any[]>("http://localhost:3000/users");
  }

  addUser(user): Observable<any[]>{
    return this.http.post<any>("http://localhost:3000/users", user);
  }

  getItems() : Observable<any>{
    return this.Items.asObservable();
  }

  //this.http.get<any>("http://localhost:3000/items")
    
  getSelectedItems(str)
  {
    var items;

     fetch(`http://localhost:3000/items/${str}`)
    .then(response => response.json())
    .then(data => this.Items.next(data));

  }
  

  setUser(user:any)
  {
    console.log(user.up_ime)
    this.subject.next(user);
  }

  getUser():Observable<any>
  {
    return this.subject.asObservable();
  }

  clearUser()
  {
    this.subject.next();
  }

  sendToBag(item)
  {
    this.bag.push(item)
    this.Bag.next(item);
  }

  getBagCheck()
  {
    return this.bag;
  }

  getBag()
  {
    return this.Bag.asObservable();
  }
  
  
 
}
