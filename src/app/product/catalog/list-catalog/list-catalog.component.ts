import { Component, OnInit } from '@angular/core';
import { CatalogServiceService } from '../../../service/catalog-service.service';

@Component({
  selector: 'app-list-catalog',
  templateUrl: './list-catalog.component.html',
  styleUrls: ['./list-catalog.component.css']
})
export class ListCatalogComponent implements OnInit {
  catalogList: any = {};
  p = 1;
  itemsPerPage: number;
  constructor(private catalogServie: CatalogServiceService) { }

  ngOnInit(): void {
    this.catalogServie.getAllCatalg().subscribe((res) => {
      console.log(res);
      this.catalogList = res;
    });
  }

}
