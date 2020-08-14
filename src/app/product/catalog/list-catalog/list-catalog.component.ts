import { Component, OnInit } from '@angular/core';
import { CatalogServiceService } from '../../../service/catalog-service.service';

@Component({
  selector: 'app-list-catalog',
  templateUrl: './list-catalog.component.html',
  styleUrls: ['./list-catalog.component.css']
})
export class ListCatalogComponent implements OnInit {

  constructor(private catalogServie: CatalogServiceService) { }

  ngOnInit(): void {
    this.catalogServie.getAllCatalg().subscribe((res) => {
      console.log(res);
    });
  }

}
