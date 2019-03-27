import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface UserData {
  name: string;
  position: string;
  age: string;
  ethnicity: string;
  height: string;
  weight: string;
}

  const NAMES: string[] = ["Jason", "Michael", "William", "Arjun", "Jerry", "Jon", "Ryan", "Ben", "Bryce", "Joe", "Luke", "Zach", "Chaz", "Thomas"];
  const ETHNICITY: string[] = ["Asian", "Hispanic", "African American", "Caucasian", "Indian"];
  const POSITION: string[] = ["Dev 1", "Dev 2", "Dev 3", "Dev 4", "Dev 5", "Product Owner", "Manager", "QA"];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'position', 'age', 'ethnicity', 'height', 'weight'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    this.dataSource = new MatTableDataSource(users);
   }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
  const ethnicity = ETHNICITY[Math.round(Math.random() * (ETHNICITY.length - 1))];
  const position = POSITION[Math.round(Math.random() * (POSITION.length - 1))];
  return {
    name: name,
    position: position,
    age: (Math.round(Math.random() * 95) + 1).toString(),
    ethnicity: ethnicity,
    height: (Math.round(Math.random() * 20) + 60).toString(),
    weight: (Math.round(Math.random() * 120) + 150).toString()
  }
}
