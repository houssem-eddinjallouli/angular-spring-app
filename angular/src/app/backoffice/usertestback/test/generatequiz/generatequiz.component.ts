import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-generatequiz',
  templateUrl: './generatequiz.component.html',
  styleUrls: ['./generatequiz.component.scss']
})
export class GeneratequizComponent implements OnInit {
  spinner=false;
  apiform!: FormGroup;
  selectedValue: number = 0;
  quizsbyapi: any[] = [];
  updateValue(value: any) {
    this.selectedValue = value.target.value;
  }
  lequestionbidou:any;
  constructor(private fb: FormBuilder, private quizservice: QuizService) { }
  ngOnInit(): void {
    this.apiform = this.fb.group({
      langue: ['fr'],
      choix: ['2'],
      categorie: ['0'],
      difficulte: ['0'],
      nbrquestions: ['10',Validators.required],
      anecdote: ['0'],
      wikipedia: ['0']
    });
  }
  test() {
    this.spinner=true;
    console.log(this.apiform.value);
    this.url = this.openquizzdbAPI  + "&lang=" + this.apiform.value.langue
                                    + "&choice=" + this.apiform.value.choix
                                    + "&categ=" + this.apiform.value.categorie
                                    + "&diff=" + this.apiform.value.difficulte
                                    + "&anec=" + this.apiform.value.anecdote
                                    + "&wiki=" + this.apiform.value.wikipedia;
    
    //console.log(this.url);
    for (let i = 1; i <= this.apiform.value.nbrquestions; i++) {
      this.quizservice.getaquestion(this.url).subscribe((response: any) => { 
          this.lequestionbidou = response.results; 
          this.quizsbyapi = this.quizsbyapi.concat(this.lequestionbidou); // Use concat to merge arrays properly
      });
  }
  
    console.log(this.quizsbyapi);
    this.quizservice.addQuizApi(this.quizsbyapi).subscribe(()=>{location.reload();});
  }
  private openquizzdbAPI = 'https://api.openquizzdb.org/?key=WH4XF8N9SV';
  private url: any


  /*
  langue           &lang=
  nbr de choix     &choice=
  categorie        &categ=sports
  difficulté       &diff=1
  anecdote         &anec=1
  Wikipédia        &wiki=1
  */
}