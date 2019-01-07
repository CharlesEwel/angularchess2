import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private elementRef:ElementRef) {};

  ngOnInit() {

  }



  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.innerHTML="basicTabulate('#first-table', jsondata, ['Name', 'Moves', 'Games Found', 'Win', 'Draw', 'Loss', 'Difference', 'Percentage Popularity']); advancedTabulate('#second-table', jsondata); createBasicChart('#first-chart', jsondata); createAdvancedChart('#second-chart', jsondata);";
    this.elementRef.nativeElement.appendChild(s);
  }

}
