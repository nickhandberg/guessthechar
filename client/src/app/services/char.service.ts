import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Char } from 'src/app/interfaces/char';
import { CHARS } from 'src/app/mock-data';

@Injectable({
  providedIn: 'root',
})
export class CharService {
  size: number | undefined;
  currIndex: number = CHARS.length - 1;

  constructor(private http: HttpClient) {}

  getChar(id: number): Observable<Char> {
    return this.http.get<Char>(`http://localhost:8080/?id=${id}`);
  }

  getSize(): Observable<number> {
    return this.http.get<number>('http://localhost:8080/last');
  }

  setCurrIndex(i: number) {
    this.currIndex = i;
  }

  getCurrIndex(): number | undefined {
    return this.currIndex;
  }
}
