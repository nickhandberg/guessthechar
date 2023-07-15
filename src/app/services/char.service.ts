import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Char } from 'src/app/char';
import { CHARS } from 'src/app/mock-data';

@Injectable({
    providedIn: 'root'
})
export class CharService {

    constructor() { }

    getChars(): Observable<Char[]> {
        const characters = of(CHARS);
        return characters;
    }

    getChar(id: number): Observable<Char> {
        const character = CHARS.find(c => c.id === id)!;
        return of(character);
    }
}
