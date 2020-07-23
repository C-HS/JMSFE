import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.css']
})
export class AddCatalogComponent implements OnInit {
  catalogForm: FormGroup;
  catalogName: FormControl;
  constructor(private formBuilder: FormBuilder,
              router: Router
  ) {
    this.createFormControls();
    this.createForm();
  }
  ngOnInit(): void {
  }
  createFormControls(): void{
    this.catalogName = new FormControl('', Validators.required);
  }
  createForm(): void{
    this.catalogForm = this.formBuilder.group({
      catalogName: this.catalogName
    });
  }
  onSubmit(): void{
    console.error('Value of Catalog: ' + this.catalogForm.value);
  }
  onReset(): void{
    this.catalogForm.reset();
  }
}
