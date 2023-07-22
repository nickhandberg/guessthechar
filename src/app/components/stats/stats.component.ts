import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Stats } from 'src/app/interfaces/stats';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent{
    @Input() showStats: boolean = false;
    @Output() sendShowStats = new EventEmitter<boolean>();
    stats: Stats | undefined;
    max: number | undefined;

    constructor(private userService: UserService) {}

    ngOnChanges(changes: SimpleChanges){
        this.stats = this.userService.getStats();
        this.max = Math.max(...this.stats!.dist);
        console.log(this.max);
    }

    closeStats(){
        this.sendShowStats.emit(false);
    }
}
