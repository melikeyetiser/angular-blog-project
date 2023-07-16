import { Injectable } from '@angular/core';
import { Categories } from '../blogInterfaces';
import { categoryList } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  selectedCategory_id: number = 0;

  selectCategory(id: number){
    this.selectedCategory_id = id;
  }

  categories: Categories[] = categoryList;
  // category IDs are monotonically increasing so we do not take it as an input and instead determine it here
  private newCategoryID: number = this.categories.length + 1;

  addCategory(name: string, creation_date: string){

    const newCategory: Categories = {
      category_id: this.newCategoryID,
      name: name,
      creation_date: creation_date
    }

    this.categories.push(newCategory);
  }

  updateCategory(name: string, creation_date: string){
    const _category = this.categories.find((_category: Categories) => {
      return _category.category_id == this.selectedCategory_id;
    }); 

    if (_category) {
      
      _category.name = name;
      _category.creation_date = creation_date;
    }
  }

}
