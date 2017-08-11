import {Component, OnInit} from '@angular/core';
import {Crib} from "../crib";
import {CribsService} from "../services/cribs.service";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent implements OnInit {

  cribInCarts:Array<Crib>=[];
  quantity:number;
  constructor(private cr:CribsService)
  {

  }
  ngOnInit()
  {
    this.cr.cribValue.subscribe(
      data=>
      {
        this.cribInCarts.push(data);

      /*  this.cribInCarts.push( this.cr.getCribDetail(data));*/
      }
    );

  }


  deleteItem(data)
  {
    this.cribInCarts.splice(this.cribInCarts.indexOf(data),1);

  }
}

