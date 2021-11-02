import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clientconsentdocs',
  templateUrl: './clientconsentdocs.component.html',
  styleUrls: ['./clientconsentdocs.component.scss']
})
export class ClientconsentdocsComponent implements OnInit {

  constructor() { }

  
  displayedColumns: string[] = ['name' ,"Action"];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayDocuments = []

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }


  ngOnInit(): void {

    this.dataSource = new MatTableDataSource(this.displayDocuments);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
  }

}
