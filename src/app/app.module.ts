import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,  RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import {NgxPageScrollModule} from 'ngx-page-scroll';




import { routing } from './app.router';

// core layout components
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TemplateComponent } from './layout/template/template.component';

import { LoginComponent } from './login/login.component';

import { ShowPersonDataComponent } from './show-person-data/show-person-data.component';
import { DasboardComponent } from './dasboard/dasboard.component';






import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DasboardComponent,
    TopbarComponent,
    SidebarComponent,
    TemplateComponent,
    ShowPersonDataComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    InternationalPhoneModule,
    NgxPageScrollModule
    
    
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
