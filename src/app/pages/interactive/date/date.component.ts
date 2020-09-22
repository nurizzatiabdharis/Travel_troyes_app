import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {

  @Input() currentQuestion: any;
  @Output() currentQuestionChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

}
