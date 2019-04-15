import { Component, OnInit } from '@angular/core';
import {myCountries} from "../services/countries.services";
import {myCust} from "../services/cust.services";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
private result1:any;
private result2:any;
  constructor(private _serv:myCountries,private _serv1:myCust) { }

  ngOnInit() {
    this._serv.getCountries().subscribe((posRes)=>{
      this.result1=posRes;
      this._serv1.getCust().subscribe((res)=>{
        this.result2=res.records;
      },(err:HttpErrorResponse)=>{
        if(err.error instanceof Error){
          console.log("client side error")
        }else{
          console.log("server side error")
        }
      })
    },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("client side errr")
      }else{
        console.log("server side error")
      }
    })
  }

}
