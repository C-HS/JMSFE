import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CatalogServiceService } from '../../../service/catalog-service.service';

@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.css']
})
export class AddCatalogComponent implements OnInit {
  catalogForm: FormGroup;
  catalogName: FormControl;
  fileSource: FormControl;
  catalogDesc: FormControl;
  fileToUpload: File = null;
  imageSrc: any = 'assets/img/placeholder.png';
 constructor(private httpClient: HttpClient,
             private catalogService: CatalogServiceService){
   this.catalogForm = new FormGroup({
      catalogName: new FormControl(''),
      catalogDesc: new FormControl(''),
      file: new FormControl(''),
      // fileSource: new FormControl('')
   });
 }
 ngOnInit(){}

 public onFileChange(event): void{
   const reader = new FileReader();
   if (event.target.files && event.target.files.length){
    const [file] = event.target.files;
    this.fileToUpload = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSrc = reader.result as string;
      this.catalogForm.patchValue({
        // fileSource: reader.result
      });
    }
   }
 }
 public submit(): void{
   const fd = new FormData();
   this.catalogForm.get('file').setValue('');
  //  fd.append('catalog', this.catalogForm.value);
   fd.append('catalog', JSON.stringify(this.catalogForm.value));
   fd.append('file', this.fileToUpload);
   this.catalogService.addCatalog(fd).subscribe((res) => {
     console.log(res);
   });
 }
}
