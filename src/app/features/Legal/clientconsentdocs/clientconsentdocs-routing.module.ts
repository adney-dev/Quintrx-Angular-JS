import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientconsentdocsComponent } from './clientconsentdocs.component';

const routes: Routes = [
  {
    path: '',
    component: ClientconsentdocsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientconsentdocsRoutingModule {}