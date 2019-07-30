import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { MatTableDataSource } from '@angular/material';
import { EntryElement } from '../interfaces/EntryElement';


@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

   //we need to inject our entry.service.ts into the constructor
  constructor(private service:EntryService) { }

  displayedColumns: string[] = ['Description', 'IsExpense', 'Value'];
  dataSource;

  ngOnInit() {
     //we need to trigger the service method(getAll) from with this component
    //the getAll method returns an observable, so we need to use the subscribe method to get the response object
    //then we log the response
    this.service.getAll().subscribe((data) => {
      console.log('Results -', data);
       //we need to fill the data from the subscribe method
      //we need to define we receive an ElementEntry Datatype & the data will be an array of entry elements
      this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[]);    
    })
  }

}
