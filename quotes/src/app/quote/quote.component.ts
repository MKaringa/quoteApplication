import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }

   quotes:Quote[] = [
    new Quote(1, 'The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela',"Mungai",new Date(2020,6,20),0),
    new Quote(2, 'If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough.','Oprah Winfrey', "Mungai",new Date(2020,6,20),0),
    new Quote(3, 'As a man sow, shall he reap. and I know that talk is cheap. But the heat of the battle is as sweet as the victory.' , 'Bob Marley', "Mungai",new Date(2020,6,2100),0),
    new Quote(4, 'Life is what happens when you are busy making other plans.' , 'John Lennon', "Mungai",new Date(2020,6,20),0),
    new Quote(5, "Your time is limited, so do not waste it living someone else's life. Do not be trapped by dogma – which is living with the results of other people's thinking.", 'Steve Jobs', "Mungai",new Date(2020,6,20),0),
  ];

 

}
