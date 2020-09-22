import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.page.html',
  styleUrls: ['./interactive.page.scss'],
})
export class InteractivePage implements OnInit {

  constructor() { }

  questions = [
    {
      type: 'main',
      title: 'We will offer you interactive courses adapted to your desires and your profile',
      image: '/assets/image/couple.jpg',
      image_alt: 'couple-travel',
    },
    {
      type: 'date',
      title: 'We will offer you interactive courses adapted to your desires and your profile',
      image: '/assets/image/hcp.svg',
    },
    {
      type: 'question-img',
      title: 'I visit...',
      answers: [
        { id: 0, label: 'Alone', isChecked: false, image: '/assets/image/alone.jpg' },
        { id: 0, label: 'Couple', isChecked: false, image: '/assets/image/couple.jpg' },
        { id: 0, label: 'Family', isChecked: false, image: '/assets/image/family.jpg' },
        { id: 0, label: 'Friends', isChecked: false, image: '/assets/image/friends.jpg' },
      ],
    },
    {
      type: 'question-img',
      title: 'I visit...',
      answers: [
        { id: 0, label: 'By bus', isChecked: false, image: '/assets/image/bus.jpg' },
        { id: 0, label: 'Walking', isChecked: false, image: '/assets/image/walk.jpg' },
        { id: 0, label: 'By car', isChecked: false, image: '/assets/image/car.jpg' },
      ],
    },
    {
      type: 'question-text',
      title: 'I visit...',
      answers: [
        { id: 0, label: 'Visit culturelle', isChecked: false },
        { id: 0, label: 'Visit culturelle', isChecked: false },
        { id: 0, label: 'Visit culturelle', isChecked: false },
        { id: 0, label: 'Visit culturelle', isChecked: false },
        { id: 0, label: 'Visit culturelle', isChecked: false },
      ],
    },
  ];

  currentQuestion: any;
  index = 0;
  totalQuestion: number;
  isEnd = false;

  ngOnInit() {
    this.totalQuestion = this.questions.length;
    this.currentQuestion = this.questions[this.index];
  }

  goToNextQuestion() {
    if (this.index < this.questions.length - 1) {
      this.index++;
      this.currentQuestion = this.questions[this.index];
    } else {
      this.isEnd = true;
    }
  }
}
