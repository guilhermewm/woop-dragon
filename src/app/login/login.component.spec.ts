import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { User } from '../user/user';
import { AlertsModule } from '../shared/components/alerts/alerts.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [        
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule,
        VMessageModule,
        AlertsModule,
        RouterModule.forRoot([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    const user: User = {
      userName: 'admin',
      password: '123456' 
    }

    component.loginForm.setValue(user);

    let result = component.login();
    expect(result).toBeTruthy();
  });

  it('should not login', () => {
    const user: User = {
      userName: 'admin',
      password: '123' 
    }

    component.loginForm.setValue(user);

    let result = component.login();
    expect(result).toBeFalsy();
  });

  it('should have a form element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('userName field validity false', () => {
    let userName = component.loginForm.controls['userName']; 
    expect(userName.valid).toBeFalsy(); 
  });

  it('userName field validity true', () => {
    let errors = {};
    let userName = component.loginForm.controls['userName'];
    errors = userName.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });

  it('password field validity false', () => {
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy(); 
  });

  it('password field validity true', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy(); 
  });
});
