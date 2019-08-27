import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  private myauthors:Array<object> = [];
 
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.fetchAuthors();
  }

  public fetchAuthors()
  {
    this.apiservice.viewAuthors().subscribe((response:Array<object>)=>{
      this.myauthors=response;
    });
  }

}
