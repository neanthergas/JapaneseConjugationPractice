import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeRoutingModule } from './practice-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PracticeComponent } from './practice.component';
import { PracticeGameComponent } from './practice-game/practice-game.component';


@NgModule({
  declarations: [
    PracticeComponent,
    PracticeGameComponent,
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PracticeModule { }
