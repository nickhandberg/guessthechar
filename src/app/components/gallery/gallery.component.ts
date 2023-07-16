import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Char } from 'src/app/interfaces/char';
import { GameProgress } from 'src/app/interfaces/game-progress';
import { UserService } from 'src/app/services/user.service';
import { GuessComponent } from '../guess/guess.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, GuessComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent{
    @Input() currentChar: Char | undefined;
    gameProgress: GameProgress | undefined;
    imageIndex: number | undefined;
    
    constructor(private userService: UserService){}

    ngOnChanges(changes: SimpleChanges){
        this.setImageIndex();
    }

    changeImage(index: number): void{
        if(this.currentChar?.imageLinks[index] != undefined){
            this.imageIndex = index;
        }
    }

    setImageIndex(): void {
        this.gameProgress = this.currentChar ? this.userService.getUserData(this.currentChar.id) : undefined;
        this.imageIndex = this.gameProgress ? Math.min(5, this.gameProgress.guesses) : 0;
    }

    skip(): void{
        this.gameProgress = this.currentChar ? this.userService.getUserData(this.currentChar.id) : undefined
        if(this.gameProgress && !this.gameProgress.correct && this.gameProgress.guesses < 6){
            this.gameProgress.history.push("Skipped");
            this.gameProgress = Object.assign({}, this.gameProgress);
            this.imageIndex = Math.min(5,this.gameProgress.guesses += 1);
            this.userService.setUserData(this.gameProgress);    
        }
    }

    updateGameProgress(gameProgress: GameProgress){
        this.gameProgress = gameProgress;
        this.imageIndex = Math.min(5,this.gameProgress.guesses);
    }
}
