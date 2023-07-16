import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Char } from 'src/app/interfaces/char';
import { GameProgress } from 'src/app/interfaces/game-progress';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-guess',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent {
    @Input() currentChar: Char | undefined;
    @Input() gameProgress: GameProgress | undefined;
    @Output() sendGameProgress = new EventEmitter<GameProgress>();
    userInput: string | undefined;

    constructor(private userService: UserService) {}

    ngOnChanges(changes: SimpleChanges){
        this.setChar();
    }

    setChar(): void {
        this.gameProgress = this.currentChar ? this.userService.getUserData(this.currentChar.id) : undefined;
        if(this.gameProgress){
            this.gameProgress.correct = this.gameProgress ? this.gameProgress?.correct : false;
            this.gameProgress.history = [...this.gameProgress!.history];
        }
    }

    onKey(event: any){
        this.userInput = event.target.value;
    }

    submitGuess(): void {
        if(this.gameProgress && this.currentChar && this.userInput){
            this.gameProgress.correct = this.userInput == this.currentChar.name ? true:false;
            this.gameProgress.guesses+=1;
            this.gameProgress.history.push(this.userInput);
            this.userService.setUserData(this.gameProgress);
            this.sendGameProgress.emit(this.gameProgress);
        }
    }
}
