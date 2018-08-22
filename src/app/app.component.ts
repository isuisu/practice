import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  closeResult: string;
  lastPopoverRef: any;
  constructor(private modalService: NgbModal) { }
  openVerticallyCentered(cancel) {
    this.modalService.open(cancel, { centered: true });
  }
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'advanced';
  answer = '';
 
  user = {
    password: '',
    email: '',
    subscribe: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.password = this.signupForm.value.userData.password;
    this.user.email = this.signupForm.value.userData.email;
    this.user.subscribe = this.signupForm.value.subscribe;
    this.user.answer = this.signupForm.value.questionAnswer;
   
    this.signupForm.reset();
  }
  
}
