import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { UserService } from 'src/app/APIs/user/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-addmenugroupaction',
  templateUrl: './addmenugroupaction.component.html',
  styleUrls: ['./addmenugroupaction.component.scss']
})
export class AddmenugroupactionComponent implements OnInit, OnDestroy {

  constructor(private _route : Router, private UserService : UserService, private cdr  :ChangeDetectorRef) { }

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  

  dtOptions: DataTables.Settings = {};
  dtTrigger : Subject<any>  =  new Subject();


  public actions : any = [
    {
      name : 'CREATE'
    },
    {
      name : "UPDATE"
    },
    {
      name : "DELETE"
    },
    {
      name : "VIEW"
    }
    
  ]


  menuActionGroupRelation  : any = {
    groupId : null,
    menuId : '1',
    permission : '1'
  }

  exisitngMenuRelation  = []


  public menusData = [];
name;
groupId;

showContent;

  submit()
  {
    
    var permisionss = '';
    var createPerm = (<HTMLInputElement>document.getElementById("createId")).checked; 
    var updatePerm = (<HTMLInputElement>document.getElementById("updateId")).checked; 
    var deletePerm = (<HTMLInputElement>document.getElementById("deleteId")).checked; 
    var viewPerm = (<HTMLInputElement>document.getElementById("viewId")).checked; 


    if(createPerm == true)
    {
      if(updatePerm == true || deletePerm == true || viewPerm == true)
      {
        permisionss = permisionss +  'CREATE|'
      }
      else
      {
        permisionss = permisionss +  'CREATE'
      }
     
      
    }
  
    
    if(updatePerm == true)
    {
      if(deletePerm == true || viewPerm == true)
      {
        permisionss = permisionss +  'UPDATE|'
      }
      else
      {
        permisionss = permisionss +  'UPDATE'
      }
     
    }
    
    if(deletePerm == true)
    {
      if(viewPerm == true)
      {
        permisionss = permisionss +  'DELETE|'
      }
      else
      {
        permisionss = permisionss +  'DELETE'
      }
    }
    
    if(viewPerm == true)
    {
      permisionss = permisionss + 'VIEW'
    }


    console.log(permisionss)

    this.menuActionGroupRelation.groupId = this.groupId;
    this.menuActionGroupRelation.permission = permisionss;

    console.log(this.menuActionGroupRelation)


    this.UserService.createcreateMenuActionGroupRelationteUser(this.menuActionGroupRelation)
    .then((result) => {

      this.UserService.getMenuActionRelation().subscribe(data => {
      
        let toStringCount = JSON.stringify(data);
        const parseCount = JSON.parse(toStringCount);
        var getCountArray = parseCount["responseObject"];
        this.exisitngMenuRelation = [];
       
  
        console.log(getCountArray)
  
        for(var d of getCountArray)
        {
          if(d["groupId"] == this.groupId)
          {
            console.log(d["menuData"]["name"])
  
            this.exisitngMenuRelation.push({"name" : d["menuData"]["name"], "groupId" : d["groupId"], "permission" : d["permission"]})
          }
        }
  
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          // Destroy the table first
          dtInstance.destroy();
          // Call the dtTrigger to rerender again
          this.dtTrigger.next();
        });
  
      })

     

    })
        

    .catch((err) => {
      console.log(err);
      
     });
     
     
  
    
  }

  rerender()
  {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });

   
  }


  
  ngOnInit(): void {
    
    setTimeout(() => this.showContent = true, 250);

    this.dtOptions = {
      paging: false,
      processing: true,
      search: true,
      searching: true,
      columnDefs: [ {
        'targets': 4,
        'orderable': false
        } ]
    };

    

    if(this.UserService.groupActionCheck == 1)
    {
      this.name =  this.UserService.userGroupActionData["name"];
      this.groupId = this.UserService.userGroupActionData["groupId"]

    }
   
    console.log(this.UserService.userGroupActionData["name"])


    this.UserService.getMenuActionRelation().subscribe(data => {
      
      let toStringCount = JSON.stringify(data);
      const parseCount = JSON.parse(toStringCount);
      var getCountArray = parseCount["responseObject"];
      this.cdr.detectChanges();

      console.log(getCountArray)

      for(var d of getCountArray)
      {
        if(d["groupId"] == this.groupId)
        {
          console.log(d["menuData"]["name"])

          this.exisitngMenuRelation.push({"name" : d["menuData"]["name"], "groupId" : d["groupId"], "permission" : d["permission"]})
        }
      }

      this.dtTrigger.next();

    })




    this.UserService.getAllMenu().subscribe(data => {

      let toStringCount = JSON.stringify(data);
      const parseCount = JSON.parse(toStringCount);
      var getCountArray = parseCount["responseObject"];
      console.log(getCountArray["chidMenuList"])


      for(var d of getCountArray["chidMenuList"])
      {
        this.menusData.push({"menuId" : d["menuId"],"name" : d["name"] ,"alias" : d["alias"], "orderNumber" : d["orderNumber"], "parentMenuId" : d["parentMenuId"],
        "status" : d["status"]})
      }

     

    })


  }

  ngOnDestroy()
  {
    this.dtTrigger.unsubscribe();
  }

}
