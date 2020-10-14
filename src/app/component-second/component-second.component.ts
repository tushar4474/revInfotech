import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-component-second',
  templateUrl: './component-second.component.html',
  styleUrls: ['./component-second.component.css']
})
export class ComponentSecondComponent implements OnInit {

  data:Array<any>;
  dataCityTwo:Array<any>;
  dataCityThree:Array<any>;
  dataCityFour:Array<any>;

constructor(private user:UsersService){
 this.data = new Array<any>();
 this.dataCityTwo = new Array<any>();
}
ngOnInit(){
 this.getAll();
}
getAll(){
  this.user.getData().subscribe((data) => {
    console.log(data);
    this.data = data;
  })
}



}
