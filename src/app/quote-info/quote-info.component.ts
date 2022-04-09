import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

  submit(login:any) {
    console.log(formSubmitted, login)
  }

  quotes:Quote[]=[
      new Quote(1, 'if you want the rainbow, you must put up with the rain', 0, 0),
      new Quote(2, 'if you want the rainbow, you must put up with the rain', 0, 0),
      new Quote(3, 'if you want the rainbow, you must put up with the rain', 0, 0)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
function formSubmitted(formSubmitted: any, login: any) {
  throw new Error('Function not implemented.');
}

