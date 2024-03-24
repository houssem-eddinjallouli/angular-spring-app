import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Activities } from 'src/app/models/activitie';
import { UserService } from 'src/app/services/user.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit{
  constructor(private userservice: UserService){
    this.dataSource = new MatTableDataSource(this.activities);
  }
  activities!: Activities[];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getallactivities();
  }

  public getallactivities(): void {
    this.userservice.getActivities().subscribe(
      (response: Activities[]) => {
        this.activities = response;
        this.dataSource.data = this.activities; // Update dataSource when activities change
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
