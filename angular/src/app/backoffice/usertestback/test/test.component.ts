import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Test } from 'src/app/models/test';
import { QuizService } from 'src/app/services/quiz.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{
  constructor(private quizservice:QuizService,private renderer: Renderer2) { }
  ngOnInit(): void {
   
this.getalltests();

  }
  public tests!:Test[];
  public getalltests(): void{
    this.quizservice.getTests().subscribe(
      (response:Test[])=>{
        this.tests=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  active(id:number){
    this.quizservice.activateanactivate(id).subscribe(() => {
      // just refresh
      this.getalltests();
    });
  }


  deleteId: number | null = null;


  openDeleteModal(id: number) {
    this.deleteId = id;
    const modalElement = document.getElementById('confirmDeleteModal');
    if (modalElement) {
      this.renderer.addClass(modalElement, 'show'); // Add the 'show' class to display the modal
      this.renderer.setStyle(modalElement, 'display', 'block'); // Set the display style to 'block'
    }
  }
  
  confirmDelete() {
    const modalElement = document.getElementById('confirmDeleteModal');
    if (modalElement) {
      this.renderer.removeClass(modalElement, 'show'); // Remove the 'show' class to hide the modal
      this.renderer.setStyle(modalElement, 'display', 'none'); // Set the display style to 'none'
    }
    
    if (this.deleteId !== null) {
      this.delete(this.deleteId);
      this.deleteId = null;
    }
  }
  
  
  delete(id:number){
    this.quizservice.deletetest(id).subscribe(() => {
      // just refresh
      this.getalltests();
    });
  }

}
