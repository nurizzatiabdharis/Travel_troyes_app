import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  @Input() currentQuestion: any;
  @Output() currentQuestionChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

}
