import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UserService } from 'src/app/APIs/user/user.service';

@Component({
  selector: 'app-usergroups',
  templateUrl: './usergroups.component.html',
  styleUrls: ['./usergroups.component.scss']
})
export class UsergroupsComponent implements OnInit {
  public loading: boolean;
  constructor(private _route : Router, private UserService : UserService) { }

  displayedColumns: string[] = ['name','Description' ,'Status', 'Action'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  groups : any = {
    name : null,
    description : null,
    status : 'A',
    groupId : null
  }

  check = 1;
  btnCheck = 'Submit'
  submit()
  {


  //  console.log(this.groups)

    if(this.check == 1)
    {

      this.UserService.createUserGroup(this.groups)
      .then((result) => {})
      .catch((err) => {
        console.log(err);


      });


      window.location.reload();
    }
    else if(this.check == 2)
    {

      console.log(this.groups)

      this.UserService.updateUserGroup(this.groups)
        .then((result) => {})
        .catch((err) => {
          console.log(err);


      });


      window.location.reload();
    }



  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }


  editUser(e)
  {

    this.UserService.userGroupActionData = e;
    this.UserService.groupActionCheck = 1;
    this._route.navigate(['/group-action'])
/*

    this.check = 2;
    console.log(e["name"])

    this.groups.name = e["name"]
    this.groups.description = e["Description"]
    this.groups.status = e["Status"]
    this.groups.groupId = e["groupId"]

    this.btnCheck = 'Update'
    */
  }

  deleteUser(e)
  {
    this.UserService.delUserGroup(e["groupId"])
  }




  userGroupsData = [];
  showContent;
  ngOnInit(): void {
    this.loading = true;


    setTimeout(() => this.showContent = true, 250);


    this.UserService.getAllUserGroup().subscribe(data => {

      let code = JSON.stringify(data);
      const obj = JSON.parse(code);
      var x = obj["responseObject"]

      //console.log(data)


      for(var d of x)
      {
        this.userGroupsData.push({"name" : d["name"], "Description" : d["description"], "Status" : d["status"], "groupId" : d["groupId"]})
      }
      this.dataSource = new MatTableDataSource(this.userGroupsData);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false;

    })



  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
