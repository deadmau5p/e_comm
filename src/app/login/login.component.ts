import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataS : DataService) { }

  typeoflog : String= "login";
  users;
  logeduser;

  

  ngOnInit(): void {
    this.dataS.getUsers().subscribe(users => this.users = users);
    
    
  }

  onSubmitForm(e)
  {
    if(this.typeoflog === "login")
    {
      var username = e.target.user.value;
      var password = e.target.pass.value;

      
      for(var i = 0; i < this.users.length;i++)
      {
        
        if(this.users[i].up_ime === username && this.users[i].geslo === password)
        {
          
          this.logeduser = this.users[i];
          
          this.dataS.setUser(this.logeduser)
          document.getElementById('welcome').innerHTML="Welcome " + this.logeduser.up_ime;
          break;
        }
      }


      
    }
    else{
      console.log(e)
    }
    e.preventDefault()


    
  }

  onRegClick()
  {
    this.typeoflog = "reg"

  }

}
