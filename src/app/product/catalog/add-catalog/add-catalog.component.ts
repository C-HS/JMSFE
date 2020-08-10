import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.css']
})
export class AddCatalogComponent implements OnInit {
 catalogForm:FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.catalogForm = this.formBuilder.group({
      catalogName: [''],
      file: [null]
    })
  }
  ngOnInit(){}
  onFileChange(event){
    const fileSelected = (event.target as HTMLInputElement).files[0];
    this.catalogForm.patchValue({
      file: fileSelected
    });
    this.catalogForm.get('file').updateValueAndValidity();
  }
  onSubmit(){
    console.log(this.catalogForm.value);
  }
  onReset(){
    console.log("Form Data Reset");
  }
}
