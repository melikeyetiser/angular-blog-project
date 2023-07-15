import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddUserComponent } from './add-user/add-user.component';


const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'comments', component: CommentComponent},
  {path: 'users', component: UserComponent},
  {path: 'users/add', component: AddUserComponent},
  {path: 'posts', component: PostComponent},
  {path: 'categories', component: CategoryComponent},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
