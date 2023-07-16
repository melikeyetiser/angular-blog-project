import { Component } from '@angular/core';
import { Categories } from '../blogInterfaces';
import { categoryList } from 'src/data';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, map, tap } from 'rxjs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: Categories[] = categoryList;


  constructor(public categoryService: CategoryService){
    
  }
}
