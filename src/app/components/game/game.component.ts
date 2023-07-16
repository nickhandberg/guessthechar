import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { Char } from 'src/app/interfaces/char';
import { GameProgress } from 'src/app/interfaces/game-progress';
import { CharService } from 'src/app/services/char.service';
import { UserService } from 'src/app/services/user.service';
import { GalleryComponent } from '../gallery/gallery.component';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, GalleryComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
    chars: Char[] = [];
    index: number = 0;
    imageIndex: number | undefined;
    currentChar: Char | undefined;
    gameProgress: GameProgress | undefined;

    constructor(private charService: CharService, private userService: UserService) {}

    ngOnInit(): void {
        this.getChars();
        this.setImageIndex();
    }

    getChars(): void {
        this.charService.getChars().subscribe(chars => this.chars = chars);
        this.index = this.chars.length-1;
        this.currentChar = this.chars[this.index];
    }

    navForward(): void {
        this.imageIndex  = 10;
        this.index += 1;
        this.currentChar = this.chars[this.index];
        this.setImageIndex();
    }

    navBack(): void {
        this.imageIndex  = 10;
        this.index -= 1;
        this.currentChar = this.chars[this.index];
        this.setImageIndex();
    }

    setImageIndex(): void {
        console.log(this.imageIndex);
        this.getGameProgress();
        this.imageIndex = Math.min(5,this.gameProgress!.guesses);
        console.log(this.imageIndex);
    }

    getGameProgress(): void {
        this.gameProgress = this.userService.getUserData(this.index);
    }
}