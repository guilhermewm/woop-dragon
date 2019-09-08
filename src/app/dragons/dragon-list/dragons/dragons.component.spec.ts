import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsComponent } from './dragons.component';
import { DragonModule } from '../../dragon/dragon.module';
import { Dragon } from '../../dragon/dragon';

describe('DragonsComponent', () => {
  let component: DragonsComponent;
  let fixture: ComponentFixture<DragonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonsComponent ],
      imports: [        
        DragonModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p sorry element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p')).toBeTruthy();
  });

  it('should have a list ol element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ol')).toBeTruthy();
  });

  it('should group itens into 2 arrays', () => {
    const dragons: Dragon[] = 
      [
        {
          createdAt: new Date("2019-09-08T03:35:54.130Z"),
          history: "",
          id: "0",
          name: "Dragon1",
          type: "Fire"
        },
        {
          createdAt: new Date("2019-09-08T03:35:54.130Z"),
          history: "",
          id: "1",
          name: "Dragon2",
          type: "Fire",
        },
        {
          createdAt: new Date("2019-09-07T09:56:38.732Z"),
          history: "",
          id: "2",
          name: "Jewel",
          type: "Silver",
        },
        {
          createdAt: new Date("2019-09-07T09:56:38.732Z"),
          history: "",
          id: "3",
          name: "Jewel 2",
          type: "Silver",
        },
        {
          createdAt: new Date("2019-09-07T09:56:38.732Z"),
          history: "",
          id: "4",
          name: "Jewel 3",
          type: "Silver",
        }
      ];
    
    const grouped = component.groupColumns(dragons, 4);
    expect(grouped.length).toEqual(2);
  });

  it('should get false when group itens into 2 arrays, when numbers of dragons are less than 4', () => {
    const dragons: Dragon[] = 
      [
        {
          createdAt: new Date("2019-09-08T03:35:54.130Z"),
          history: "",
          id: "0",
          name: "Dragon1",
          type: "Fire"
        },
        {
          createdAt: new Date("2019-09-08T03:35:54.130Z"),
          history: "",
          id: "1",
          name: "Dragon2",
          type: "Fire",
        },
        {
          createdAt: new Date("2019-09-07T09:56:38.732Z"),
          history: "",
          id: "2",
          name: "Jewel",
          type: "Silver",
        }
      ];
    
    const grouped = component.groupColumns(dragons, 4);
    expect(grouped.length == 2).toBeFalsy();
  });
});
