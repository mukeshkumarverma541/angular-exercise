import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { RoutesListComponent } from './routes-list/routes-list.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIfComponent } from './ng-if/ng-if.component';
import { ElseBlockComponent } from './else-block/else-block.component';
import { ThenBlockComponent } from './then-block/then-block.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { TabletComponent } from './products/tablet/tablet.component';
import { DesktopComponent } from './products/desktop/desktop.component';
import { TelevisionComponent } from './products/television/television.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { CardComponent } from './ng-content/card/card.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ChildComponentComponent } from './component-communication/child-component/child-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { ExChildComponent } from './exercise1/ex-child/ex-child.component';
import { HttpUsersComponent } from './http-users/http-users.component';
import { HttpClientModule } from '@angular/common/http';
import { SubjectBehaviourComponent } from './subject-behaviour/subject-behaviour.component';
import { SbComp1Component } from './subject-behaviour/sb-comp1/sb-comp1.component';
import { SbComp2Component } from './subject-behaviour/sb-comp2/sb-comp2.component';
import { SbComp3Component } from './subject-behaviour/sb-comp3/sb-comp3.component';
import { SbComp4Component } from './subject-behaviour/sb-comp4/sb-comp4.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { UxpipePipe } from './pipes/uxpipe.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipe } from './custom-pipes/filter.pipe';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUserComponent } from './manage-user/manage-user.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindComponent,
    ClassStyleComponent,
    RoutesListComponent,
    EventBindComponent,
    TemplateReferenceComponent,
    TwoWayDataBindComponent,
    NgIfComponent,
    ElseBlockComponent,
    ThenBlockComponent,
    NgSwitchComponent,
    NgForComponent,
    PushSpliceComponent,
    ProductsComponent,
    LaptopComponent,
    TabletComponent,
    DesktopComponent,
    TelevisionComponent,
    NgContentComponent,
    CardComponent,
    ComponentCommunicationComponent,
    ChildComponentComponent,
    ServiceComponentComponent,
    Exercise1Component,
    ExChildComponent,
    HttpUsersComponent,
    SubjectBehaviourComponent,
    SbComp1Component,
    SbComp2Component,
    SbComp3Component,
    SbComp4Component,
    ViewChildComponent,
    UxpipePipe,
    PipesComponent,
    FilterPipe,
    ContactComponent,
    ReactiveFormComponent,
    ManageProductComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserAnimationsModule, 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
