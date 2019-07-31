import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  baseUrl: string = 'http://localhost:51087/api/entries/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);  
  }

  //post methods takes in entry as a parameter
  createEntry(entry){
    //sending a post request to our backend
    return this.http.post(this.baseUrl, entry)
  }  

}
