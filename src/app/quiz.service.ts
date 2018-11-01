import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Quiz} from './shared/quiz';
//import {Question} from './shared/question';


 
@Injectable({
  providedIn: 'root'
})
export class QuizService {
private _url:string="src/app/data.json";

  constructor(private http: HttpClient) { }
  getQuiz():Observable<Quiz[]>{
    return this.http.get<Quiz[]>(this._url);


  }
}
