import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
    @Input() showInfo: boolean = false;
    @Output() sendShowInfo = new EventEmitter<boolean>();

    closeInfo(){
        this.sendShowInfo.emit(false);
    }
}
