import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/list-product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ViewProductComponent } from './product/view-product/view-product.component';

import { ListAttributesComponent } from './attribute/list-attributes/list-attributes.component';
import { AddAttributeComponent } from './attribute/add-attribute/add-attribute.component';
import { EditAttributeComponent } from './attribute/edit-attribute/edit-attribute.component';
import { ViewAttributeComponent } from './attribute/view-attribute/view-attribute.component';

import { ListCatalogComponent } from './catalog/list-catalog/list-catalog.component';
import { AddCatalogComponent } from './catalog/add-catalog/add-catalog.component';
import { EditCatalogComponent } from './catalog/edit-catalog/edit-catalog.component';
import { ViewCatalogComponent } from './catalog/view-catalog/view-catalog.component';

import { ListCategoryComponent } from './category/list-category/list-category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { ViewCategoryComponent } from './category/view-category/view-category.component';

import { ListUomComponent } from './uom/list-uom/list-uom.component';
import { AddUomComponent } from './uom/add-uom/add-uom.component';
import { EditUomComponent } from './uom/edit-uom/edit-uom.component';
import { ViewUomComponent } from './uom/view-uom/view-uom.component';

const routes: Routes = [
  { path: '', component: ProductComponent, data: { breadcrumb: 'Products' } },
  { path: 'listProduct', component: ProductComponent, data: { breadcrumb: 'All Products' } },
  { path: 'addProduct', component: AddProductComponent, data: { breadcrumb: 'Add Product' } },
  { path: 'editProduct', component: EditProductComponent, data: { breadcrumb: 'Edit Product' } },
  { path: 'viewProduct', component: ViewProductComponent, data: { breadcrumb: 'View Product' } },
  { path: 'listAttributes', component: ListAttributesComponent, data: { breadcrumb: 'All Attributes' } },
  { path: 'addAttribute', component: AddAttributeComponent, data: { breadcrumb: 'Add Attribute' } },
  { path: 'editAttribute', component: EditAttributeComponent, data: { breadcrumb: 'Edit Attribute' } },
  { path: 'viewAttribute', component: ViewAttributeComponent, data: { breadcrumb: 'View Attribute' } },
  { path: 'listCatalog', component: ListCatalogComponent, data: { breadcrumb: 'All Catalogs' } },
  { path: 'addCatalog', component: AddCatalogComponent, data: { breadcrumb: 'Add Catalog' } },
  { path: 'editCatalog', component: EditCatalogComponent, data: { breadcrumb: 'Edit Catalog' } },
  // { path: 'viewCatalog', component: ViewCatalogComponent, data: { breadcrumb: 'View Catalog' } },
  { path: 'viewCatalog/:catalogId', component: ViewCatalogComponent, data: { breadcrumb: 'View Catalog' } },
  { path: 'listCategory', component: ListCategoryComponent, data: { breadcrumb: 'All Categories' } },
  { path: 'addCategory', component: AddCategoryComponent, data: { breadcrumb: 'Add Category' } },
  { path: 'editCategory', component: EditCategoryComponent, data: { breadcrumb: 'Edit Category' } },
  { path: 'viewCategory', component: ViewCategoryComponent, data: { breadcrumb: 'View Category' } },
  { path: 'listUOM', component: ListUomComponent, data: { breadcrumb: 'All UoMs' } },
  { path: 'addUOM', component: AddUomComponent, data: { breadcrumb: 'Add UoM' } },
  { path: 'editUOM', component: EditUomComponent, data: { breadcrumb: 'Edit UoM' } },
  { path: 'viewUOM', component: ViewUomComponent, data: { breadcrumb: 'View UoM' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
