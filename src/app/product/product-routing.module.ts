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
  { path: '', component: ProductComponent },
  { path: 'listProduct', component: ProductComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'editProduct', component: EditProductComponent },
  { path: 'viewProduct', component: ViewProductComponent },
  { path: 'listAttributes', component: ListAttributesComponent },
  { path: 'addAttribute', component: AddAttributeComponent },
  { path: 'editAttribute', component: EditAttributeComponent },
  { path: 'viewAttribute', component: ViewAttributeComponent },
  { path: 'listCatalog', component: ListCatalogComponent },
  { path: 'addCatalog', component: AddCatalogComponent },
  { path: 'editCatalog', component: EditCatalogComponent },
  { path: 'viewCatalog', component: ViewCatalogComponent },
  { path: 'listCategory', component: ListCategoryComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'editCategory', component: EditCategoryComponent },
  { path: 'viewCategory', component: ViewCategoryComponent },
  { path: 'listUOM', component: ListUomComponent },
  { path: 'addUOM', component: AddUomComponent },
  { path: 'editUOM', component: EditUomComponent },
  { path: 'viewUOM', component: ViewUomComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
