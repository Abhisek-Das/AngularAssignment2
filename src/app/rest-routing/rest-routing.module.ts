import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GetdataComponent } from '../getdata/getdata.component'
import { PostdataComponent } from '../postdata/postdata.component'
import { PutdataComponent } from '../putdata/putdata.component'
import { DeletedataComponent } from '../deletedata/deletedata.component'

const routes: Routes = [
  { path: 'GET', component: GetdataComponent },
  { path: 'POST', component: PostdataComponent },
  { path: 'PUT', component: PutdataComponent },
  { path: 'DELETE', component: DeletedataComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RestRoutingModule { }
