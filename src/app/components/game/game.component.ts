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
    char: Char | undefined;
    size: number = 0;
    index: number = 0;

    constructor(private charService: CharService) {}

    ngOnInit(): void {
        this.getChars();
    }

    getChars(): void {
        this.charService.getSize().subscribe(size => this.size = size);
        this.index = this.charService.currIndex;
        this.charService.getChar(this.index).subscribe(char => this.char = char);
    }

    navForward(): void {
        this.charService.setCurrIndex(this.index += 1);
        this.charService.getChar(this.index).subscribe(char => this.char = char);
    }

    navBack(): void {
        this.charService.setCurrIndex(this.index -= 1);
        this.charService.getChar(this.index).subscribe(char => this.char = char);
    }
}
