import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss'],
})
export class NavButtonComponent implements OnInit {

  @Input() isEnd: boolean;
  @Input() currentQuestion: any;
  @Output() nextQuestion = new EventEmitter<any>();

  ngOnInit() { }

  goToNextQuestion() {
    // console.log('next')
    this.nextQuestion.emit();
  }

}
