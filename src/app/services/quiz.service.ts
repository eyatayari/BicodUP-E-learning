import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) {}
  public quizzes(){
    return this._http.get('${baseUrl}/quiz/');
        }
}
