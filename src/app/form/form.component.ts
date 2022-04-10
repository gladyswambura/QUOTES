import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote = new Quote(0,"","","",new Date());

@Output() Addquote=new EventEmitter<Quote>();
  Quote: any;
  quotes: any;




  submitForm() {
    this.Addquote.emit(this.newQuote)
        
    // console.log("name")
  }

  
  constructor() { }

  ngOnInit():void {
  }

}
