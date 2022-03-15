import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PracticeGameController } from 'src/app/conjugation/practice-game-controller';

@Component({
  selector: 'app-practice-game',
  templateUrl: './practice-game.component.html',
  styleUrls: ['./practice-game.component.scss']
})
export class PracticeGameComponent implements OnInit {
  public form: FormGroup;

  @Input() practiceController: PracticeGameController | null;

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      [DATA_KEY]: [null]
    });
    this.practiceController = null;
  }

  ngOnInit(): void {
  }

  public submitForm(): void {
    if (this.practiceController !== null 
      && !this.practiceController.finished()
      && this.practiceController.test(this.form.controls[DATA_KEY].value)) 
    {
      this.form.controls[DATA_KEY].patchValue(null);
    }
  }

}

const DATA_KEY: string = 'data';
