import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogServiceService } from '../../../service/catalog-service.service';

@Component({
  selector: 'app-view-catalog',
  templateUrl: './view-catalog.component.html',
  styleUrls: ['./view-catalog.component.css']
})
export class ViewCatalogComponent implements OnInit {
  requestedCatalog;
  response: any;
  catalogName: string;
  catalogDesc: string;
  status: string;
  file;
  constructor(private route: ActivatedRoute,
              private catalogServie: CatalogServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.requestedCatalog = params.get('catalogId');
    });
    this.catalogServie.getCatalog(this.requestedCatalog).subscribe((res) => {
      // this.response = res;
      this.catalogDesc = res.catalogDesc;
      this.catalogName = res.catalogName;
      this.status = res.status;
      // this.file = new Blob(res.file, {type: 'application/png'});
      // const reader = new FileReader();
      // reader.readAsDataURL(new Blob(res.file));
      this.file = 'data:image/png;base64,' + res.file;
    });
    console.log('Requested Catalog:' + this.requestedCatalog);
    console.log('Response Data from the server' + this.response);
  }

}
