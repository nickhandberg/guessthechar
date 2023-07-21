import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Char } from 'src/app/interfaces/char';
import { CHARS } from 'src/app/mock-data';

@Injectable({
    providedIn: 'root'
})
export class CharService {
    size: number = 0;

    constructor() { }

    getChars(): Observable<Char[]> {
        const characters = of(CHARS);
        this.size = CHARS.length;
        return characters;
    }

    getChar(id: number): Observable<Char> {
        const character = CHARS.find(c => c.id === id)!;
        return of(character);
    }

    getSize(): Observable<number> {
        this.size = CHARS.length;
        return of(this.size);
    }
}
