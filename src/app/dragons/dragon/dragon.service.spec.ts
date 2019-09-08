import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Dragon } from './dragon';
import { DragonService } from './dragon.service';
import { environment } from '../../../environments/environment';

describe('DragonService', () => {
  const API = environment.baseUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DragonService]
    });
  });  
  
  it('should be created', inject([DragonService], (service: DragonService) => {
    expect(service).toBeTruthy();
  }));

  it('should get dragons',
    inject(
      [
        HttpTestingController, 
        DragonService
      ],
      (
        httpMock: HttpTestingController,
        dragonService: DragonService
      ) => {
        const mockDragons: Dragon[] = [
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
          },
          {
            createdAt: new Date("2019-09-02T14:05:48.207Z"),
            history: "This dragon is born on the fire....",
            id: "48",
            name: "Nemu",
            type: "Water",
          }
        ];

        dragonService.listDragons().subscribe((res) => {
          if (res) {
            expect(res).toEqual(mockDragons);
          }
        });

        const mockReq = httpMock.expectOne(`${API}/`);

        expect(mockReq.request.method).toBe('GET');
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.flush(mockDragons);

        httpMock.verify();
      }
    )
  );

  it('should get one dragon',
    inject(
      [
        HttpTestingController, 
        DragonService
      ],
      (
        httpMock: HttpTestingController,
        dragonService: DragonService
      ) => {
        const mockDragon: Dragon = 
          {
            createdAt: new Date("2019-09-08T03:35:54.130Z"),
            history: "",
            id: "79",
            name: "Dragon",
            type: "Fire",
          };

        dragonService.getDragonById(mockDragon.id).subscribe((res) => {
          if (res) {
            expect(res).toEqual(mockDragon);
          }
        });

        const mockReq = httpMock.expectOne(`${API}/${mockDragon.id}`);

        expect(mockReq.request.method).toBe('GET');
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.flush(mockDragon);

        httpMock.verify();
      }
    )
  );

  it('should create a new dragon',
    inject(
      [
        HttpTestingController, 
        DragonService
      ],
      (
        httpMock: HttpTestingController,
        dragonService: DragonService
      ) => {
        const mockDragon: Dragon = 
          {
            createdAt: new Date("2019-09-08T03:35:54.130Z"),
            history: "",
            id: "25",
            name: "New Dragon",
            type: "Fire",
          };

        dragonService.createDragon(mockDragon).subscribe((res: Dragon) => {
          if (res) {
            expect(res).toEqual(mockDragon);
          }
        })

        const mockReq = httpMock.expectOne(`${API}`);

        expect(mockReq.request.method).toBe('POST');
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.flush(mockDragon);

        httpMock.verify();
      }
    )
  );

  it('should update a dragon',
    inject(
      [
        HttpTestingController, 
        DragonService
      ],
      (
        httpMock: HttpTestingController,
        dragonService: DragonService
      ) => {
        const mockDragon: Dragon = 
          {
            createdAt: new Date("2019-09-08T03:35:54.130Z"),
            history: "",
            id: "25",
            name: "New Name Dragon",
            type: "New Type",
          };

        dragonService.updateDragon(mockDragon).subscribe((res: Dragon) => {
          if (res) {
            expect(res).toEqual(mockDragon);
          }
        })

        const mockReq = httpMock.expectOne(`${API}/${mockDragon.id}`);

        expect(mockReq.request.method).toBe('PUT');
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.flush(mockDragon);

        httpMock.verify();
      }
    )
  );

  it('should delete a dragon',
    inject(
      [
        HttpTestingController, 
        DragonService
      ],
      (
        httpMock: HttpTestingController,
        dragonService: DragonService
      ) => {
        const mockDragon: Dragon = 
          {
            createdAt: new Date("2019-09-08T03:35:54.130Z"),
            history: "",
            id: "25",
            name: "Deleted Dragon",
            type: "New Type",
          };

        dragonService.deleteDragon(mockDragon.id).subscribe((res: Dragon) => {
          if (res) {
            expect(res).toEqual(mockDragon);
          }
        })

        const mockReq = httpMock.expectOne(`${API}/${mockDragon.id}`);

        expect(mockReq.request.method).toBe('DELETE');
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');

        mockReq.flush(mockDragon);

        httpMock.verify();
      }
    )
  );
});
