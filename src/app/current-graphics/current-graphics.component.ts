import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-current-graphics',
  templateUrl: './current-graphics.component.html',
  styleUrls: ['./current-graphics.component.css']
})
export class CurrentGraphicsComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.innerHTML="console.log('current-graphics fires'); createAdvancedChart('#current-chart', jsondata); editableTabulate('#current-table', jsondata);";
    this.elementRef.nativeElement.appendChild(s);
  }


}
