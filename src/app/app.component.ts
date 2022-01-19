import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
   DatePipe
} from '@angular/common';
// Depending on whether rollup is used, moment needs to be imported differently.


// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
providers: [DatePipe] // like this you inject pipe,services

})
export class AppComponent  {

}

