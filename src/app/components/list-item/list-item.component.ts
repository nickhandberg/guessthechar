import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameProgress } from 'src/app/interfaces/game-progress';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent{
    @Input() index: number | undefined;
    @Input() gameProgress: GameProgress | undefined;
}
