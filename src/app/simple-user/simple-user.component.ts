import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-user',
  templateUrl: './simple-user.component.html',
  styleUrls: ['./simple-user.component.css']
})
export class SimpleUserComponent implements OnInit {
  email: any;


  constructor(private http:HttpClient,private router:Router){}//importing http functionlity

  date = new FormControl();
  title = 'Quiz';

  ngOnInit() {
   console.log(this.router)

  }
    onSubmit(contactForm: { value: any; }) {
this.email=contactForm.value['email'];
     console.log(contactForm,contactForm.value['email'],contactForm.value.email);
   }
   gotologin(): void
  {
    this.router.navigate(["Admin"])
   }

}
