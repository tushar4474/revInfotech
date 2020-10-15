import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


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
 this.dataCityThree= new Array<any>();
 this.dataCityFour = new Array<any>();
}
ngOnInit(){
 this.getAll();
 this.getAll2();
 this.getAll3();
 this.getAll4();
}
getAll(){
  this.user.getData().subscribe((data) => {
    console.log(data);
    this.data = data;
  })
}

getAll2(){
  this.user.getData().subscribe((data) => {
    console.log(data);
    this.dataCityTwo = data;
  })
}

getAll3(){
  this.user.getData().subscribe((data) => {
    console.log(data);
    this.dataCityThree = data;
  })
}

getAll4(){
  this.user.getData().subscribe((data) => {
    console.log(data);
    this.dataCityFour = data;
  })
}
}
