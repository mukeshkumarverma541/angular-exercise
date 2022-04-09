import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassStyleComponent } from './class-style/class-style.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ContactComponent } from './contact/contact.component';
import { DatabindComponent } from './databind/databind.component';
import { ElseBlockComponent } from './else-block/else-block.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { HttpUsersComponent } from './http-users/http-users.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PipesComponent } from './pipes/pipes.component';
import { DesktopComponent } from './products/desktop/desktop.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { ProductsComponent } from './products/products.component';
import { TabletComponent } from './products/tablet/tablet.component';
import { TelevisionComponent } from './products/television/television.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { SubjectBehaviourComponent } from './subject-behaviour/subject-behaviour.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ThenBlockComponent } from './then-block/then-block.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: RoutesListComponent
  },
  {
    path: 'data-bind', component: DatabindComponent
  },
  {
    path: 'class-style', component: ClassStyleComponent
  },
  {
    path: 'event-bind', component: EventBindComponent
  },
  {
    path: 'template-reference', component: TemplateReferenceComponent
  },
  {
    path: 'two-way-data-bind', component: TwoWayDataBindComponent
  },
  {
    path: 'ng-if', component: NgIfComponent
  },
  {
    path: 'else-block', component: ElseBlockComponent
  },
  {
    path: 'then-block', component: ThenBlockComponent
  },
  {
    path: 'ng-switch', component: NgSwitchComponent
  },
  {
    path: 'ng-for', component: NgForComponent
  },
  {
    path: 'push-splice', component: PushSpliceComponent
  },
  {
    path: 'products', component: ProductsComponent, children: [
     
      {
          path: 'desktop', component: DesktopComponent
      },
      {
        path: 'laptop', component: LaptopComponent
      },
      {
        path: 'tablet', component: TabletComponent
      },
      {
        path: 'television', component: TelevisionComponent
      }
    ]
  },
  {
    path: 'ng-content', component: NgContentComponent
  },
  {
    path: 'component-communication', component: ComponentCommunicationComponent
  },
  {
    path: 'service-component', component: ServiceComponentComponent
  },
  {
    path: 'exercise1', component: Exercise1Component
  },
  {
    path: 'http-users', component: HttpUsersComponent
  },
  {
    path: 'subject-behaviour', component: SubjectBehaviourComponent
  },
  {
    path: 'view-child', component: ViewChildComponent
  },
  {
    path: 'pipes', component: PipesComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'reactive-form', component: ReactiveFormComponent
  },
  {
    path: 'manage-product', component: ManageProductComponent
  },
  {
    path: 'manage-user', component: ManageUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
