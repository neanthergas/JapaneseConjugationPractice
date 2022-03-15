import { Component, OnInit } from '@angular/core';
import { TestPracticeController } from 'src/app/conjugation/test-practice-controller';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  public practiceController: TestPracticeController;
  constructor() { 
    this.practiceController = new TestPracticeController();
  }

  ngOnInit(): void {
  }

}