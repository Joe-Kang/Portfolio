import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MatTabGroupBase } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _darkTheme: Subject<boolean>;
  isDarkTheme: Observable<boolean>;

  constructor() {
    this._darkTheme = new Subject<boolean>();
    this.isDarkTheme = this._darkTheme.asObservable();
  }

  setDarkTheme(isDarkTheme: boolean) {
    this._darkTheme.next(isDarkTheme);
  }
}
