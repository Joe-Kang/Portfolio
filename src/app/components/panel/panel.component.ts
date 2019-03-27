import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { city_state } from './city_state';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface City_State {
  city: string;
  state: string;
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  today = new Date();
  step = 0;
  startDate = new FormControl();

  city_state = city_state;
  cityInput: string;

  cityCtrl = new FormControl();
  stateCtrl = new FormControl();
  filteredCities: Observable<City_State[]>;
  filteredStates: Observable<any[]>;
  states = new Array();

  constructor() {
    this.filteredCities = this.cityCtrl.valueChanges.pipe(
      map(city => city ? this._filterCities(city) : this.city_state.slice())
    );

    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => state ? this._filterStates(state) : this.states.slice())
    );
   }

  ngOnInit() {}

  stateComplete(city: string) {
    if (city) {
      let list = new Array();
      for (let i = 0; i < this.city_state.length - 1; i++) {
        const location = this.city_state[i];
        if(location.city === city) {
          list.push(location.state)
        }
      }
      if (list.length == 1) {
        this.stateCtrl.setValue(list[0]);
      } else if (list.length > 1) {
        this.states = list;
      }
    }
  }

  _filterCities(value: string): City_State[] {
    const filterValue = value.toLowerCase();
    let filter = this.city_state.filter((elem, i, arr) => {
      if (arr.findIndex(location => location.city === elem.city) === i)
      return elem
    })
    return filter.filter(location => location.city.toLowerCase().indexOf(filterValue) === 0);
  }

  _filterStates(value: string) {
    const filterValue = value.toLowerCase();
    return this.states.filter(state => state.toLowerCase().indexOf(filterValue) === 0);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
