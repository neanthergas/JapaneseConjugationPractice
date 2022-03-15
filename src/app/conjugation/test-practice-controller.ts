
import { PracticeGameController } from './practice-game-controller';

export class TestPracticeController extends PracticeGameController {
  private counter: number;
  constructor() {
    super();
    this.counter = 0;
  }

  public getCurrentHint(): string {
    if (this.finished()) {
      return 'Finished';
    }
    return 'Answer: ' + this.counter;
  }
  
  public test(answer: string): boolean {
    if (!this.finished() && answer === this.counter.toString()) {
      this.counter++;
      return true;
    }
    return false;
  }

  public finished(): boolean {
    return this.counter >= 5;
  }
}
