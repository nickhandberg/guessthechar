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
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  char: Char | undefined;
  size: number = 0;
  index: number = 0;

  constructor(private charService: CharService) {}

  ngOnInit(): void {
    this.getChar();
  }

  // Gets the char data with id matching the currIndex
  getChar(): void {
    this.charService.getSize().subscribe((size) => {
      this.size = size + 1;
      this.index = this.charService.currIndex;
      this.charService
        .getChar(this.index)
        .subscribe((char) => (this.char = char));
    });
  }

  // Increments currIndex and gets the new char data
  navForward(): void {
    this.charService.setCurrIndex((this.index += 1));
    this.charService
      .getChar(this.index)
      .subscribe((char) => (this.char = char));
  }

  // Decrements currIndex and gets the new char data
  navBack(): void {
    this.charService.setCurrIndex((this.index -= 1));
    this.charService
      .getChar(this.index)
      .subscribe((char) => (this.char = char));
  }
}
