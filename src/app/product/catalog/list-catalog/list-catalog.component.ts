import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogServiceService } from '../../../service/catalog-service.service';

@Component({
  selector: 'app-list-catalog',
  templateUrl: './list-catalog.component.html',
  styleUrls: ['./list-catalog.component.css']
})
export class ListCatalogComponent implements OnInit {
  catalogList: any = [];
  p = 1;
  itemsPerPage: number;
  constructor(private catalogServie: CatalogServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.catalogServie.getAllCatalg().subscribe((res) => {
      this.catalogList = res;
    });
  }
  deleteCatalog(catalogId): void{
    this.catalogServie.deleteCatalog(catalogId).subscribe((res) => {
      console.log('deleted ' + catalogId);
    });
  }
  viewCatalog(catalogId): void{
    this.router.navigate([`/products/viewCatalog/${catalogId}`]);
  }
  editCatalog(catalogId): void{
    this.router.navigate([`/products/viewCatalog/${catalogId}`]);
  }

}
