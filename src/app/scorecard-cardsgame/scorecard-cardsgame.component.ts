import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {PlayersInterface} from './players-interface';


@Component({
  selector: 'app-scorecard-cardsgame',
  templateUrl: './scorecard-cardsgame.component.html',
  styleUrls: ['./scorecard-cardsgame.component.css']
})
export class ScorecardCardsgameComponent implements OnInit {

  constructor() { }
  public numberOfPlayers: any;
  public tableData: any = [];
  public totals: any = [];
  public tableHeaders = [];
  public amountPerPerson = 0;
  public refresh: boolean = true;
  ngOnInit(): void {
    
  }

  totalScores(scores?) {
    let mergedArr = [];
    this.tableData.forEach((element,i) => {
      mergedArr = mergedArr.concat(element);
    });
    this.tableHeaders.forEach((e, i) => {
      let filteredObj = mergedArr.filter(x => x.name === e);
      if(filteredObj.length > 1) {
      this.totals[i] = mergedArr.filter(x => x.name === e).reduce((acc, val) => Number(acc.score)+Number(val.score));
      } else {
        this.totals[i] = filteredObj[0] && filteredObj[0].score ? Number(filteredObj[0].score): 0;
      }
    })
    console.log(this.totals);
  }

  triggerModel() {
    console.log("check", this.numberOfPlayers);
    this.tableHeaders.length = this.numberOfPlayers;
    this.initTableData();
  }

  initTableData() {
    if(!this.tableData[0]) {
      this.tableData[0] = [];
    for(let i=0; i<this.numberOfPlayers;i++) {
      this.tableData[0][i] = {name: '', score: 0};
    }
  }
  console.log(this.tableData);
  }

  updateHeaders(value, id) {
    this.refresh = false;
    setTimeout(() => {
      this.tableHeaders[id] = value;
      this.refresh = true;
    });
    for(let i=0; i<this.tableData.length; i++) {
      this.tableData[i][id].name = value;
    }
  }

}
