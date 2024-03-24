import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Test } from 'src/app/models/test';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-availabletests',
  templateUrl: './availabletests.component.html',
  styleUrls: ['./availabletests.component.scss']
})
export class AvailabletestsComponent implements OnInit{
//   constructor(private quizservice:QuizService) { }
//   ngOnInit(): void {
   
// this.getalltests();

//   }
//   public tests!:Test[];
//   public getalltests(): void{
//     this.quizservice.getTests().subscribe(
//       (response:Test[])=>{
//         this.tests=response;
//       },
//       (error:HttpErrorResponse)=>{
//         alert(error.message);
//       }
//     );
//   }
//   getActiveTests(): Test[] {
//     return this.tests.filter(test => test.active);
//   }
tests: Test[] = [];
  interval: any;

  constructor(private quizservice: QuizService) { }

  ngOnInit(): void {
    this.getTests(); // Initial call to fetch tests
    this.interval = setInterval(() => {
      this.getTests(); // Fetch tests at fixed intervals
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval); // Clear interval on component destruction
  }

  getTests(): void {
    this.quizservice.getTests().subscribe(
      (response: Test[]) => {
        this.tests = response;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching tests:', error);
      }
    );
  }

  getActiveTests(): Test[] {
    return this.tests.filter(test => test.active);
  }
}
