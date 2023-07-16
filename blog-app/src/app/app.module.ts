import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './model/navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './model/not-found/not-found.component';
import { HomepageComponent } from './model/homepage/homepage.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { CommentDetailsComponent } from './comment/comment-details/comment-details.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    PostComponent,
    UserComponent,
    CommentComponent,
    CategoryComponent,
    NotFoundComponent,
    HomepageComponent,
    AddUserComponent,
    EditUserComponent,
    AddPostComponent,
    EditPostComponent,
    PostDetailsComponent,
    AddCommentComponent,
    CommentDetailsComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
