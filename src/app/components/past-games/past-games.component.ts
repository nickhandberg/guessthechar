import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { CharService } from 'src/app/services/char.service';
import { UserService } from 'src/app/services/user.service';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-past-games',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.css']
})
export class PastGamesComponent implements OnInit{
    size: number | undefined;
    userData: User | undefined;

    constructor(private charService: CharService, private userService: UserService){}

    ngOnInit(): void {
        this.charService.getSize().subscribe(size => this.size = size);
        console.log(this.size);
        this.userData = this.userService.getAllUserData();
    }

}
