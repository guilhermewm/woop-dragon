import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonListComponent } from './dragon-list.component';
import { SearchComponent } from './search/search.component';
import { AlertsModule } from 'src/app/shared/components/alerts/alerts.module';
import { DragonModule } from '../dragon/dragon.module';
import { DragonComponent } from '../dragon/dragon.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { DragonsComponent } from './dragons/dragons.component';
import { DragonListModule } from './dragon-list.module';
import { DragonsModule } from '../dragons.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

describe('DragonListComponent', () => {
  // let component: DragonListComponent;
  // let fixture: ComponentFixture<DragonListComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ DragonListComponent ],
  //     imports: [        
  //       ReactiveFormsModule,
  //       FormsModule,
  //       DragonsModule,
  //       HttpClientModule,
  //       HttpClientTestingModule,
  //       VMessageModule,
  //       AlertsModule,
  //       RouterModule.forRoot([])
  //     ],
  //     providers: [FormBuilder]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(DragonListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();    
  //   component.ngOnInit();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
