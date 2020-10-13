import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-second',
  templateUrl: './component-second.component.html',
  styleUrls: ['./component-second.component.css']
})
export class ComponentSecondComponent {

  city;
  dselect:number;
  page: number = 1;
  totalRecords:number;



  someData = [
    { value: 'Delhi',id:'123',city:'Pune',address:'Pune',branch:'Pune branch'},
          { value: 'Delhi',id:'13',city:'Delhi',address:'Delhi',branch:'Delhi branch'},
          { value: 'Pune',id:'123',city:'Pune',address:'Pune',branch:'Pune branch'},
          { value: 'Pune',id:'123',city:'Pune',address:'Pune',branch:'Pune branch'},
          { value: 'Delhi',id:'13',city:'Delhi',address:'Delhi',branch:'Delhi branch'},
          { value: 'Pune',id:'123',city:'Pune',address:'Pune',branch:'Pune branch'},
          { value: 'Pune',id:'34',city:'Pune',address:'Pune',branch:'Pune branch'},
          { value: 'Delhi',id:'13',city:'Delhi',address:'Delhi',branch:'Delhi branch'},
          { value: 'Delhi',id:'13',city:'Delhi',address:'Delhi',branch:'Delhi branch'},
          { value: 'Pune',id:'123',city:'Pune',address:'Pune',branch:'Pune branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Mumbai',id:'113',city:'Mumbai',address:'Mumbai',branch:'Mumbai branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'},
          { value: 'Gurgaon',id:'113',city:'Gurgaon',address:'Gurgaon',branch:'Gurgaon branch'}];





options =['Delhi', 'Pune','Gurgaon','Mumbai']

selected;
selectedData;

constructor(){
  this.selectedData = this.someData;
}



onSelect(val){
  console.log(val);
  this.selectedData = this.someData.filter(x => x.value == val)
}


}
