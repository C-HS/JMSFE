import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categoryName: FormControl;
  catelogName: FormControl;
  constructor(private formBuilder: FormBuilder,
              router: Router) {
    this.createFromControls();
    this.createForm();
  }
  createFromControls(): void{
    this.categoryName = new FormControl('');
    this.catelogName = new FormControl('');
  }
  createForm(): void{
    this.categoryForm = this.formBuilder.group({
      categoryName: this.categoryName,
      catalogName: this.catelogName
    });
  }
  ngOnInit(): void {
  }

}
