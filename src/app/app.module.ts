import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path:'books',component:BookComponent},
  {path:'authors',component:AuthorComponent}
]

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
