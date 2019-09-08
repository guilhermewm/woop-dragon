import { Component, OnInit, Input } from '@angular/core';

import { Dragon } from '../dragon/dragon';
import { DragonService } from '../dragon/dragon.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DragonFormComponent } from './dragon-form/dragon-form.component';

@Component({
  selector: 'ws-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.css']
})
export class DragonListComponent implements OnInit {

  dragons: Dragon[] = [];
  filter: string = '';

  alertVisible: boolean = false;
  alertText: string = '';
  alertType: string = '';

  constructor(
    private dragonService: DragonService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadDragons();
  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  openRegister(){
    const modalRef = this.modalService.open(DragonFormComponent);   
    modalRef.result.then(res => {
      if(res.status == 'success') {
        this.showAlert(true, `Dragon ${res.message.name} created`, 'success');
        this.loadDragons(); 
      } else {
        this.showAlert(true, `Error: status ${res.message.status} - ${res.message.statusText}`, 'danger');
      }
      setTimeout(()=>{
        this.showAlert(false);
      }, 5000);
    }).catch(()=>{})
  }

  loadDragons(): void {
    this.dragonService
      .listDragons()
      .subscribe(dragons => {
        dragons.sort((a,b) => a.name.localeCompare(b.name));
        this.filter = '';
        this.dragons = dragons;
      });
  }

  deleteDragon(id: string): void {
    this.dragonService
      .deleteDragon(id)
      .subscribe(dragon => {
        this.showAlert(true, `Dragon ${dragon.name} removed`, 'success');
        this.dragons = this.dragons.filter(dragon => dragon.id !== id); 
      }, err => {
        this.showAlert(true, `Error: status ${err.status} - ${err.statusText}`, 'danger');
      });
      
    setTimeout(()=>{
      this.showAlert(false);
    }, 5000);
  }

  showAlert(visible: boolean, text: string = '', type: string = ''): void {
    this.alertVisible = visible;
    this.alertText = text;
    this.alertType = type;
  }  
}
