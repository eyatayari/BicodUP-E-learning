import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes=[
    {idquiz:'23',
    title:'java basic',
    description:'java quiz basic description',
    active:'',
    nbrquestion:'10',
    maxMarks:'50',
    category:{
      title:'programming'
    }
  },{idquiz:'23',
  title:'java basic',
  description:'java quiz basic description',
  active:'',
  nbrquestion:'10',
  maxMarks:'50',
  category:{
    title:'programming'
  }
},
]
  constructor(private _quiz:QuizService) { 
  }

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error)=>{
        console.log(error);
        alert('erreur');
      }
    )
  }

}
