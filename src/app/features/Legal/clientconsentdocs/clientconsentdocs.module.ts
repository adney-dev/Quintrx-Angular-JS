import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AutocompleteComponent } from 'angular-ng-autocomplete';

import { ClientconsentdocsRoutingModule } from './clientconsentdocs-routing.module';
import { ClientconsentdocsComponent } from './clientconsentdocs.component';
import { DataTablesModule } from "angular-datatables";
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    declarations: [ClientconsentdocsComponent],
    imports: [CommonModule, ClientconsentdocsRoutingModule, FormsModule, ReactiveFormsModule,
        MatTableModule,
        MatToolbarModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule],
  })
  export class ClientconsentdocsModule {}
