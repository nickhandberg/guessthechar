import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoComponent } from '../info/info.component';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, StatsComponent, InfoComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    icons: string[] = ["👽", "🤠", "😎", "🤖", "👾", "👻", "🤓", "🤡"]
    icon: string = this.icons[Math.floor(Math.random()*this.icons.length)];
    showInfo: boolean = false;
    showStats: boolean = false;

    showStatsModal(): void{
        this.showStats = true;
    }

    showInfoModal(): void{
        this.showInfo = true;
    }

    updateShowInfo(showInfo: boolean): void{
        this.showInfo = showInfo;
    }

    updateShowStats(showStats: boolean): void{
        this.showStats = showStats;
    }
    
}
