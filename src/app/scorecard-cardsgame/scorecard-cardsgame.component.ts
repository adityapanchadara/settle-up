import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { PlayersInterface } from './players-interface';


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
  public totalPoints = 100;
  public settleAmounts: any = [];
  ngOnInit(): void {

  }

  totalScores(scores?) {
    let mergedArr = [];
    this.tableData.forEach((element, i) => {
      mergedArr = mergedArr.concat(element);
    });
    this.tableHeaders.forEach((e, i) => {
      let filteredObj = mergedArr.filter(x => x.name === e);
      if (filteredObj.length > 1) {
        this.totals[i] = mergedArr.filter(x => x.name === e).reduce((acc, val) => {
          if (isNaN(Number(val.score))) {
            val.score = 0;
          }
          if (acc && acc.score) {
            acc = acc.score;
          }
          return Number(acc) + Number(val.score)
        });
      } else {
        this.totals[i] = filteredObj[0] && filteredObj[0].score ? Number(filteredObj[0].score) : 0;
      }
    });
    this.settlingAmounts();
  }

  settlingAmounts() {
    let totalFlies = this.totals.filter(e => e >= this.totalPoints);
    if (totalFlies.length > 0) {
      this.totals.forEach((element, i) => {
        this.settleAmounts[i] = element >= this.totalPoints ? -this.amountPerPerson : (this.amountPerPerson * this.numberOfPlayers) / (this.numberOfPlayers - totalFlies.length);
      });
    }
    console.log("check amounts", this.settleAmounts);
  }

  triggerModel() {
    if (this.numberOfPlayers > 0) {
      this.tableHeaders.length = this.numberOfPlayers;
      this.initTableData();
    }
  }

  initTableData() {
    let y = this.tableData.length;
    if (!this.tableData[y]) {
      this.tableData[y] = [];
      for (let i = 0; i < this.numberOfPlayers; i++) {
        this.tableData[y][i] = { name: this.tableData && this.tableData[y - 1] && this.tableData[y - 1][i] ? this.tableData[y - 1][i].name : '', score: this.totals && this.totals[i] && this.totals[i] > this.totalPoints ? 're-enter on' + Math.max(this.totals) + 1 : 0 };
      }
    }
    console.log("check updated value", this.tableData);
  }

  updateHeaders(value, id) {
    this.refresh = false;
    setTimeout(() => {
      this.tableHeaders[id] = value;
      this.refresh = true;
    });
    for (let i = 0; i < this.tableData.length; i++) {
      this.tableData[i][id].name = value;
    }
  }

  addMoreRows() {
    this.initTableData();
  }

}
