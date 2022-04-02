import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import{MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
//import { RouterModule } from './app-routing/app-routing.module';
import{routing} from './app-routing/app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizzesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    routing,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
