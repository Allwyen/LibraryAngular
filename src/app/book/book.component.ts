import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  private mydata:Array<object> = [];
 
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.viewData();
  }

  public viewData()
  {
    this.apiservice.viewData().subscribe((response:Array<object>)=>{
      this.mydata=response;
      console.log(this.mydata);
    });
  }

}
