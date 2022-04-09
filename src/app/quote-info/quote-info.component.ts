import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

  quotes:Quote[]=[
      new Quote(1, 'if you want the rainbow, you must put up with the rain', 0, 0),
      new Quote(2, 'if you want the rainbow, you must put up with the rain', 0, 0),
      new Quote(3, 'if you want the rainbow, you must put up with the rain', 0, 0)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
