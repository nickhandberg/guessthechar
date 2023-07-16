import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Char } from 'src/app/interfaces/char';
import { GameProgress } from 'src/app/interfaces/game-progress';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
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
        if(this.currentChar?.imageLinks[index-1] != undefined){
            this.imageIndex = index-1;
        }
    }

    setImageIndex(): void {
        this.gameProgress = this.userService.getUserData(this.currentChar!.id);
        this.imageIndex = Math.min(5,this.gameProgress!.guesses);
    }

    skip(): void{
        if(this.gameProgress && !this.gameProgress.correct && this.gameProgress.guesses < 6){
            this.gameProgress.history.push("Skipped");
            this.imageIndex = Math.min(5,this.gameProgress.guesses += 1);
            this.userService.setUserData(this.gameProgress);    
        }
    }
}
