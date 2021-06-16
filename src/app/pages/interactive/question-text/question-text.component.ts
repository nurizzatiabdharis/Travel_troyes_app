import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.scss'],
})
export class QuestionTextComponent implements OnInit {

  @Input() currentQuestion: any;
  @Output() currentQuestionChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clickAnswer(answer: any) {
    if (this.currentQuestion.isMultipleAnswer) {
      this.haveMultipleAnswer(answer);
    } else {
      this.haveOneAnswer(answer);
    }
  }

  haveOneAnswer(answer: any) {
    this.currentQuestion.answers.forEach((data: any) => {
      if (data.isSelected) {
        data.isSelected = false;
      }
    });
    answer.isSelected = !answer.isSelected;
    this.currentQuestionChange.emit(this.currentQuestion);
  }

  haveMultipleAnswer(answer: any) {
    answer.isSelected = !answer.isSelected;
    this.currentQuestion.isDisableButton = false;
    if (!this.currentQuestion.answers.some((ans: any) => ans.isSelected)) {
      this.currentQuestion.isDisableButton = true;
    }
    this.currentQuestionChange.emit(this.currentQuestion);
  }

}
