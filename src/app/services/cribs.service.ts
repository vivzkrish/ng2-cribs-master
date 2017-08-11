import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import {Crib} from "../crib";

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();
  public cribValue=new Subject<number>();
  cribListing:Array<Crib>;
  constructor(private http: Http) { }

  getAllCribs() {
    return this.http.get('data/cribs.json').map
    (
      res =>
        this.cribListing=res.json()
    );
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

  setCribDetail(cribId)
  {
    this.cribValue.next(cribId);
  }

  getCribDetail(cribId)
  {
     for(var i = 0;i<this.cribListing.length;i++)
     {
     if(this.cribListing[i].id==cribId)
     {
     return this.cribListing[i];
     }
     }
  }
}
