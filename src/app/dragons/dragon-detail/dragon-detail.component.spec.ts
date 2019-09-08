import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonDetailComponent } from './dragon-detail.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { AlertsModule } from 'src/app/shared/components/alerts/alerts.module';
import { DragonDetailModule } from './dragon-detail.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('DragonDetailComponent', () => {
  let component: DragonDetailComponent;
  let fixture: ComponentFixture<DragonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonDetailComponent ],
      imports: [        
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule,
        VMessageModule,
        AlertsModule,
        RouterModule.forRoot([])
      ],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    component.canEdit(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an alert ws-alers', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ws-alerts')).toBeTruthy();
  });

  it('should have a nav element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('nav')).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.dragonForm.valid).toBeFalsy();
  });

  it('dragonName field validity false', () => {
    let dragonName = component.dragonForm.controls['dragonName']; (1)
    expect(dragonName.valid).toBeFalsy(); 
  });

  it('dragonName field validity true', () => {
    let errors = {};
    let dragonName = component.dragonForm.controls['dragonName'];
    errors = dragonName.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('dragonType field validity false', () => {
    let dragonType = component.dragonForm.controls['dragonType']; (1)
    expect(dragonType.valid).toBeFalsy(); 
  });

  it('dragonType field validity true', () => {
    let errors = {};
    let dragonType = component.dragonForm.controls['dragonType'];
    errors = dragonType.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });
});
