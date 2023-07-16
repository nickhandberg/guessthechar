import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Char } from 'src/app/interfaces/char';
import { CharService } from 'src/app/services/char.service';
import { GalleryComponent } from '../gallery/gallery.component';
import { GuessComponent } from '../guess/guess.component';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, GalleryComponent, GuessComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
    chars: Char[] = [];
    index: number = 0;
    currentChar: Char | undefined;

    constructor(private charService: CharService) {}

    ngOnInit(): void {
        this.getChars();
    }

    getChars(): void {
        this.charService.getChars().subscribe(chars => this.chars = chars);
        this.index = this.chars.length-1;
        this.currentChar = this.chars[this.index];
    }

    navForward(): void {
        this.currentChar = this.chars[this.index += 1];
    }

    navBack(): void {
        this.currentChar = this.chars[this.index -= 1];
    }
}
