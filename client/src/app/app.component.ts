import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharService } from './services/char.service';

@Component({
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private charService: CharService) {}

  // Sets the current game to the last (newest) game
  // currIndex just keeps track of the game user is currently on
  ngOnInit(): void {
    this.charService
      .getSize()
      .subscribe((size) => this.charService.setCurrIndex(size));
  }
}
