import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Char } from 'src/app/interfaces/char';
import { CHARS } from 'src/app/mock-data';

@Injectable({
    providedIn: 'root'
})
export class CharService{
    size: number | undefined;
    currIndex: number = CHARS.length-1;

    constructor() { }

    getChar(id: number): Observable<Char> {
        const character = CHARS.find(c => c.id === id)!;
        return of(character);
    }

    getSize(): Observable<number> {
        this.size = CHARS.length;
        return of(this.size);
    }

    setCurrIndex(i: number){
        this.currIndex = i;
    }

    getCurrIndex(): number | undefined{
        return this.currIndex;
    }
}
