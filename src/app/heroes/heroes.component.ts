import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
todos=[]
add(value){
  this.todos.push(value);
  console.log(this.todos);
}
delete(index){
  this.todos.splice(index,1);
}
submit(value:any){
if(value !=""){
  this.todos.push(value.todo)
}else{
  alert("please fill form")}
}

  hero: Hero={
    id:1,
    name:"eee"
  };
  constructor() { }

  ngOnInit() {
   
  }

}
