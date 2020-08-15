import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAttributeComponent } from './attribute/add-attribute/add-attribute.component';
import { EditAttributeComponent } from './attribute/edit-attribute/edit-attribute.component';
import { ListAttributesComponent } from './attribute/list-attributes/list-attributes.component';
import { ViewAttributeComponent } from './attribute/view-attribute/view-attribute.component';
import { AddCatalogComponent } from './catalog/add-catalog/add-catalog.component';
import { EditCatalogComponent } from './catalog/edit-catalog/edit-catalog.component';
import { ListCatalogComponent } from './catalog/list-catalog/list-catalog.component';
import { ViewCatalogComponent } from './catalog/view-catalog/view-catalog.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { ViewCategoryComponent } from './category/view-category/view-category.component';
import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductComponent } from './product/list-product/product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { ListUomComponent } from './uom/list-uom/list-uom.component';
import { AddUomComponent } from './uom/add-uom/add-uom.component';
import { EditUomComponent } from './uom/edit-uom/edit-uom.component';
import { ViewUomComponent } from './uom/view-uom/view-uom.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent,
    ListCatalogComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    AddCatalogComponent,
    EditCatalogComponent,
    ViewCatalogComponent,
    EditCategoryComponent,
    ViewCategoryComponent,
    EditProductComponent,
    ViewProductComponent,
    ListAttributesComponent,
    AddAttributeComponent,
    EditAttributeComponent,
    ViewAttributeComponent,
    ListUomComponent,
    AddUomComponent,
    EditUomComponent,
    ViewUomComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ProductModule { }
