import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
    @Input() showStats: boolean = false;
    @Output() sendShowStats = new EventEmitter<boolean>();

    closeStats(){
        this.sendShowStats.emit(false);
    }
}
