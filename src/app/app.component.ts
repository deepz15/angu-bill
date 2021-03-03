import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prName: any;
  prAmount: any;
  quants:any;
  rocket: any = [];
 
  del(i: any) {
    this.rocket.splice(i, 1);

  }
  add() {
    let r = {
      pname: this.prName,
      amount: this.prAmount,
      quantity: this.quants

    };
    this.rocket.push(r);
    console.log(this.rocket)
  }

 total(){

  }
  
}





