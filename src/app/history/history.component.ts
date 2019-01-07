import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // basicTabulate('#first-table', jsondata, ['Name', 'Moves', 'Games Found', 'Win', 'Draw', 'Loss', 'Difference', 'Percentage Popularity']); // 2 column table
    // advancedTabulate('#second-table', jsondata);
    // createBasicChart('#first-chart', jsondata);
    // createAdvancedChart('#second-chart', jsondata);
  }

  constructor(private elementRef:ElementRef) {};

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "src/scripts.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
