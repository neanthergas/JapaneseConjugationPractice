

export abstract class PracticeGameController {
    public abstract getCurrentHint(): string;
    public abstract test(answer: string): boolean;
    public abstract finished(): boolean;
    
}
