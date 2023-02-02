import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './dataview/data.component';
import { ProductService } from './shared/product.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';  
import { DataService } from './shared/data.service';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ListboxModule} from 'primeng/listbox';
import {DialogModule} from 'primeng/dialog';


import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    SplitterModule,
    TableModule,
    ToastModule,
    DropdownModule,
    HttpClientModule,
    InputTextModule,
    InputTextareaModule,
    ListboxModule,    
    DialogModule,
    ReactiveFormsModule,

    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [MessageService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
