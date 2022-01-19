import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
isSimpleUser=false;
  que: any;
  index = 0;
  quesFromdb: any;
  obj: any;
countryList=[{name:"us",id:1},{name:"india",id:2},{name:"uae",id:3},{name:"israel",id:4}]
  scoreboard: Object | undefined;
  isAdmin: Boolean = false
  email: any = "";
  isloggedin: any;


  constructor(private router:Router,private route:ActivatedRoute , private http:HttpClient) { }

  ngOnInit(): void {
    console.log(this.route)
  }
  onlogin(Adminvalue: any): void{
    console.log(Adminvalue.value)
     this.http.post("http://localhost:8080/welcome", Adminvalue.value).subscribe((obj:any) => {
      console.log(obj);
       this.isAdmin = obj.isadmin;
       this.isloggedin = obj.isloggedin;
       if (this.isAdmin == false && this.isloggedin==true)
       {
         this.isSimpleUser=true;
         }

    })
  }
   onsubmit(Adminvalue: any): void{
     console.log(Adminvalue.value)
     this.http.post("http://localhost:8080/Added", Adminvalue.value).subscribe((obj: any) => {
       console.log(obj)
     })
   }

  onNext(que:any) {
    if (this.index < this.quesFromdb.length-1) { this.index++ }

    console.log(this.que)
    let url = "http://localhost:8080/Choose"
    let sendingObejct={'choose':this.que,'gmail':this.email,'selectedque':que}
    this.http.post(url, sendingObejct).subscribe((backhand: Object | undefined) => {
      console.log(backhand);
      this.scoreboard = backhand;

    })
    this.que=""
  this.obj=this.quesFromdb[this.index]
  }
    getquefromdb() {
    let url="http://localhost:8080/GetAllQuiz"
    this.http.get(url).subscribe(
      (      get: any) => {
        console.log("backend response , from url, calling method",url,"scoreboard()")
        console.log(get)
        this.quesFromdb = get
         this.obj=this.quesFromdb[this.index]
    }
    )



  }

}
//map.put("isadmin", isAdmin);
//  map.put("isloggedin", isloggedin);
