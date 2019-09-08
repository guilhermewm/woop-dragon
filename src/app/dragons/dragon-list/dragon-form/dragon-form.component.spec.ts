import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonFormComponent } from './dragon-form.component';
import { DragonFormModule } from './dragon-form.module';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DragonFormComponent', () => {
  let component: DragonFormComponent;
  let fixture: ComponentFixture<DragonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonFormComponent ],
      imports: [        
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule,
        VMessageModule
      ],
      providers: [FormBuilder, NgbActiveModal]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.modal-header')).toBeTruthy();
  });

  it('should have a form element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('dragonName field validity false', () => {
    let dragonName = component.registerForm.controls['dragonName']; (1)
    expect(dragonName.valid).toBeFalsy(); 
  });

  it('dragonName field validity true', () => {
    let errors = {};
    let dragonName = component.registerForm.controls['dragonName'];
    errors = dragonName.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('dragonHistory field validity true', () => {
    let dragonName = component.registerForm.controls['dragonHistory']; (1)
    expect(dragonName.valid).toBeTruthy(); 
  });

  it('dragonType field validity false', () => {
    let dragonType = component.registerForm.controls['dragonType']; (1)
    expect(dragonType.valid).toBeFalsy(); 
  });

  it('dragonType field validity true', () => {
    let errors = {};
    let dragonType = component.registerForm.controls['dragonType'];
    errors = dragonType.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

});
