import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { logincomponent} from "../app/login/login.component"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APIResolver } from "./resolver"
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSnackBarModule,
  MatMenuModule,
  MatRippleModule,
  MatTabsModule,
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { productDirective} from "./directive";
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from "./service"; 
import { description} from "./thor/thorcomponent";
import { TestService } from "../app/testService";
import { proItems}  from '../app/directive2'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    productDirective,
    logincomponent,
    description,
    proItems
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
      MatIconModule,
      MatSidenavModule,
      MatBadgeModule,
      MatListModule,
      MatGridListModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatChipsModule,
      MatTooltipModule,
      MatTableModule,
      MatPaginatorModule,
      MatButtonToggleModule,
      MatDialogModule,
      MatCheckboxModule,
      HttpClientModule,
      MatCardModule
      
  ],
  providers: [MessageService,APIResolver, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
