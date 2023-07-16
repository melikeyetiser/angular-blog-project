import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
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

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'comments', component: CommentComponent},
  {path: 'comments/add', component: AddCommentComponent},
  {path: 'comments/details', component: CommentDetailsComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/add', component: AddUserComponent},
  {path: 'users/edit', component: EditUserComponent},
  {path: 'posts', component: PostComponent},
  {path: 'posts/add', component: AddPostComponent},
  {path: 'posts/edit', component: EditPostComponent},
  {path: 'posts/details', component: PostDetailsComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'categories/add', component: AddCategoryComponent},
  {path: 'categories/edit', component: EditCategoryComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
