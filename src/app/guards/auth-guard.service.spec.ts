import { TestBed, inject } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { User } from '../user/user';

class MockRouter {
  navigate(path) {}
}

describe('AuthGuardService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: 
      [
        HttpClientTestingModule,
        RouterModule.forRoot([])      
      ],
      providers: [AuthGuardService]
    });
  });  
  
  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));

  it('should authenticate', inject([AuthGuardService], (service: AuthGuardService)  => {
    let user: User = {
      userName: 'admin',
      password: '123456'
    }
    const result = service.authenticate(user)
    expect(result).toBeTruthy();
  }));

  it('should not authenticate', inject([AuthGuardService], (service: AuthGuardService)  => {
    let user: User = {
      userName: 'admin',
      password: '1234567'
    }
    const result = service.authenticate(user)
    expect(result).toBeFalsy();
  }));

  describe('canActivate', () => {
    let authGuard: AuthGuardService;
    let authService;
    let router;

    it('should return true for a logged in user', () => {
      authService = { isLogged: () => true };
      router = new MockRouter();
      authGuard = new AuthGuardService(authService, router);

      expect(authGuard.canActivate()).toEqual(true);
    });

    it('should navigate to home for a logged out user', () => {
      authService = { isLogged: () => false };
      router = new MockRouter();
      authGuard = new AuthGuardService(authService, router);
      spyOn(router, 'navigate');
    
      expect(authGuard.canActivate()).toEqual(false);
      expect(router.navigate).toHaveBeenCalledWith(['']);
    });
  });

});
