import { Component, OnInit } from '@angular/core';
import {Quiz} from '../shared/quiz';
import {Option} from '../shared/question';
import { QuizService } from '../quiz.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  variables ={
    i:0,
    j:1,
    k:1
  }
  startTime;
  distance;
  duration =2500;
  timeEllapsed;
  
  mode='start';
  newmode;
  
  public quiz=[]
  
  
    constructor(private quizService: QuizService) { 
      
    }
  
    ngOnInit() {
   
   this.quizService.getQuiz().subscribe(data => this.quiz =data);
   console.log(this.quiz);
   
    
    }
  
    begin(){
      this.mode="quiz";
      this.startTime= new Date();
      var clock =setInterval(()=>{this.timer()},1000);
     
    }
  
    get selectQuestion(){
      this.variables.k = this.quiz.length;
      return (this.quiz) ?
  this.quiz.slice(this.variables.i,this.variables.i + this.variables.j):[] ;
  }
  
  
  timer(){var now= new Date();
  var distance = (now.getTime()- this.startTime.getTime())/1000;
  if(distance >= this.duration){this.submit()}
  this.timeEllapsed=this.timeOrder(distance)
   }
    
   timeOrder(total:number){
    var hours= Math.floor(total/(60*60));
     var minutes= Math.floor((total/(60)));
    var seconds= Math.round((total%(60)) );
    var hrs=(hours<10?'0':'') + hours;
   var mins=(minutes<10?'0':'') + minutes;
   var secs=(seconds<10?'0':'') + seconds;
     return hrs +':' + mins+':' + secs;
   }
    
  select(que:Quiz, option:Option){
  
  que.option.forEach((x)=>{if(x.name !== option.name){ x.selected=false;}else {x.selected =true;}console.log(x);});
  que.answered=true
  
  }
  
  
  
  isAnswered(que:Quiz){
   return que.option.find(x=>x.selected)? 'Answered': 'Unanswered'
   
  }
  
  isCorrect(que:Quiz){
    return que.option.every(x=>x.selected==x.isAnswer)? 'CORRECT ANSWER': 'WRONG ANSWER';
  }
  
  move(i:number){
    if (i>=0 && i<this.quiz.length){
  this.variables.i= i;
  //this.mode ="quiz";
  }
  console.log(i)}
    
  
  quizmode(){
    this.mode ="quiz";
  }
  
  reviewmode(){
    this.mode ="review";
  }
  
    submit(){
      this.mode="result";
  
   
    }}   