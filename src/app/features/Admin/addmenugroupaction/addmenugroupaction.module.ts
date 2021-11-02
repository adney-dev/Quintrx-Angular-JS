import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AutocompleteComponent } from 'angular-ng-autocomplete';

import { AddmenugroupactionRoutingModule } from './addmenugroupaction-routing.module';
import { AddmenugroupactionComponent } from './addmenugroupaction.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
    declarations: [AddmenugroupactionComponent],
    imports: [CommonModule, AddmenugroupactionRoutingModule, FormsModule, ReactiveFormsModule, DataTablesModule],
  })
  export class AddmenugroupactionModule {}
  