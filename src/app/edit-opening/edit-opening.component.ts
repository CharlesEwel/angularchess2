import { Component, OnInit } from '@angular/core';
import { Opening } from './../models/opening.model';

@Component({
  selector: 'app-edit-opening',
  inputs: ['opening'],
  templateUrl: './edit-opening.component.html',
  styleUrls: ['./edit-opening.component.css']
})
export class EditOpeningComponent implements OnInit {

  public opening: Opening;

  constructor() { }

  ngOnInit() {

  }

}
