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
    this.calculateTotalPage();
  }

  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = this.categories.length / this.pageSize;
  
  get isSliceable() {
    return this.categories.length >= 10;
  }

  private calculateTotalPage() {
    let totalPage = this.categories.length / this.pageSize;
    const remainingItems = this.categories.length % this.pageSize;
    if (remainingItems > 0) {
      totalPage++;
    }
    this.totalPage = totalPage;
  }

  handlePreviousPageButton() {
    if (this.pageIndex > 0) {
      this.pageIndex = this.pageIndex - 1;
    }
  }

  handleNextPageButton() {
    if (this.pageIndex < this.totalPage - 1) {
      this.pageIndex++;
    }
  }
}
