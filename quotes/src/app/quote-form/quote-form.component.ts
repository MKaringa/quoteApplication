import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Messages } from '../messages';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {


  quoteName: String | undefined;
  quoteAuthor: String | undefined;
  quoteMessage: String | undefined;
  published: Date | undefined;
  newMessage: any;

  messages = [
    new Messages ('Mungai', 'Einsten', 'Quantum mechanics is wrong in so many ways', new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
