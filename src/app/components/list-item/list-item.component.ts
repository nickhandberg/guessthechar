import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameProgress } from 'src/app/interfaces/game-progress';
import { CharService } from 'src/app/services/char.service';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent{
    @Input() index: number | undefined;
    @Input() gameProgress: GameProgress | undefined;

    constructor(private charService: CharService, private _router: Router){}

    setIndex(): void {
        this.charService.setCurrIndex(this.index ?? 0);
        this._router.navigateByUrl('');
    }
}
