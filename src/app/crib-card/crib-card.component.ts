import { by } from 'protractor';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Crib} from "../crib";
import {CribsService} from "../services/cribs.service";


@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent {

  @Input('cribbi') cribObj: Crib;


  constructor(private cr:CribsService)
  {

  }

  addToCart(data):void {
    console.log(data);
    this.cr.setCribDetail(data);
  }


}
