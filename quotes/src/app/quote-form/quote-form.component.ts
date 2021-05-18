import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Messages } from '../messages';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {


  quoteName: string ;
  quoteAuthor: string ;
  quoteMessage: string;
  published: Date ;
  newMessage: any;

  messages = [
    new Messages ('Mungai', 'Einsten', 'Quantum mechanics is wrong in so many ways', new Date())
  ]


  submitMessage(){
    this.newMessage = new Messages(this.quoteName, this.quoteAuthor, this.quoteMessage, new Date ())
    this.messages.push(this.newMessage)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
