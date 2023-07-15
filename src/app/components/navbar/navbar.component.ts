import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    icons: string[] = ["👽", "🤠", "😎", "🤖", "👾", "👻", "🤓", "🤡"]
    icon: string = this.icons[Math.floor(Math.random()*this.icons.length)];

    showStats(): void{
        console.log("stats");
    }

    showHelp(): void{
        console.log("help");
    }
    
}
