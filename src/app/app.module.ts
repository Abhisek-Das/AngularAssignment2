import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestrestcomponentComponent } from './testrestcomponent/testrestcomponent.component';
import { GetdataComponent } from './getdata/getdata.component';
import { RestRoutingModule } from './rest-routing/rest-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { PostdataComponent } from './postdata/postdata.component';
import { PutdataComponent } from './putdata/putdata.component';
import { DeletedataComponent } from './deletedata/deletedata.component'

@NgModule({
  declarations: [
    AppComponent,
    TestrestcomponentComponent,
    GetdataComponent,
    PostdataComponent,
    PutdataComponent,
    DeletedataComponent
  ],
  imports: [
    BrowserModule,
    RestRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [TestrestcomponentComponent]
})
export class AppModule { }
