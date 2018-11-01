import { Component, OnInit } from '@angular/core';
//import {Hero} from '../hero';
import {Quiz} from '../shared/quiz';
import {Option} from '../shared/question';
//import {Option} from '../shared/question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
/*todos=[]
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
};*/

variables ={
  i:0,
  j:1,
  k:1
}
public quiz=[]


  constructor(private quizService: QuizService) { 
    
  }

  ngOnInit() {
   
 this.quizService.getQuiz().subscribe(data => this.quiz =data);
 console.log(this.quiz);


  }

  get selectQuestion(){
    this.variables.k= this.quiz.length;
    return (this.quiz) ?
this.quiz.slice(this.variables.i,this.variables.i + this.variables.j):[] ;
}

select(que:Quiz, option:Option){
this.move(this.variables.i + 1);
que.option.forEach((x)=>{if(x.name !== option.name){ x.selected=false;}else x.selected =true;})
}



isAnswered(que){
 return que.option.find(x=>x.selected)? "answered": "Not answered"
 
}

move(i:number){
  if (i>=0 && i<this.quiz.length){
this.variables.i= i;}
console.log(i)}
  

  submit(que){
 let answers =[];

 this.quiz.forEach(x=>answers.push({"question": x.quiz.question, "answered": x.answered}));
 console.log(answers);
  }}