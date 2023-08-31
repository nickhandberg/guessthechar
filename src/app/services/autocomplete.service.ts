import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

    options: string[] = ['Zelda', 'Zeus', 'Zeke', 'Zolan', 'Zane', 'Kristy', 'Kathy', 'Karen', 'Kratos', 'Mario', 'Mega Man', 'Marty', 'Monster'];

    constructor() { }

    getData(): Observable<string[]> {
        return of(this.options)
    }
}
