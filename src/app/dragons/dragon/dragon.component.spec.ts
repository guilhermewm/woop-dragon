import { TestBed, inject, ComponentFixture, async } from '@angular/core/testing';

import { Dragon } from './dragon';
import { DragonModule } from './dragon.module';
import { DragonComponent } from './dragon.component';
import { DragonListComponent } from '../dragon-list/dragon-list.component';
import { DragonService } from './dragon.service';
import { DragonsComponent } from '../dragon-list/dragons/dragons.component';
import { DragonDetailComponent } from '../dragon-detail/dragon-detail.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlertsModule } from 'src/app/shared/components/alerts/alerts.module';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DragonComponent', () => {
  
  let component: DragonComponent;
  let fixture: ComponentFixture<DragonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonComponent ],
      imports: [        
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule,
        VMessageModule,
        AlertsModule,
        RouterModule.forRoot([])
      ],
      providers: [FormBuilder, DragonListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('list Dragon', () => {
    const dragon: Dragon = {
      createdAt: new Date("2019-09-08T03:35:54.130Z"),
      history: "",
      id: "79",
      name: "Dragon",
      type: "Fire",
    };
    
    const mockD = 
    [
      {
        createdAt: new Date("2019-09-08T03:35:54.130Z"),
        history: "",
        id: "79",
        name: "Dragon",
        type: "Fire",
      },
      {
        createdAt: new Date("2019-09-07T09:56:38.732Z"),
        history: "",
        id: "74",
        name: "Jewel",
        type: "Silver",
      }
    ];

    const a = new DragonsComponent();
    let b = a.groupColumns(mockD, 4);
    expect(b[0][0]).toEqual(dragon);
    
  });
});
