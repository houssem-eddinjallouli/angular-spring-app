import { Component } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-importquiz',
  templateUrl: './importquiz.component.html',
  styleUrls: ['./importquiz.component.scss']
})
export class ImportquizComponent {
  constructor(private quizservice: QuizService){}

  importjson(event: any) {
    const file = event.target.files[0];
    const fileName = file.name;

    const codeimage = this.extractNumberFromFileName(fileName);
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const fileContent = e.target.result;
      const parsedJson = JSON.parse(fileContent);
      const quiz: Quiz = Object.assign(new Quiz(), parsedJson);

      console.log('this is the end',quiz);
      this.quizservice.addQuiz(quiz,codeimage? codeimage:"").subscribe(
        () => {
          console.log('Quiz added successfully');
        },
        (error) => {
          console.error('Failed to add quiz:', error);
        }
      );
    };

    reader.readAsText(file);
  }
  private extractNumberFromFileName(fileName: string): string | null {
    const numberRegex = /\d+/; // Regular expression to match a number
    const matches = fileName.match(numberRegex);

    if (matches && matches.length > 0) {
      return matches[0];
    }

    return null;
  }
}
