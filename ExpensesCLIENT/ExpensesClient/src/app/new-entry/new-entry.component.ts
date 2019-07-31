import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent {

  constructor() { }

  //creating a form group which is a collection of formcontrols
  entryForm = new FormGroup({
    description: new FormControl(''),
    isExpense: new FormControl(''),
    value: new FormControl(''),

  })
}
