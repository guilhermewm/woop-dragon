import { Component, OnInit, ViewChild, ElementRef, Input, ErrorHandler } from '@angular/core';
import {NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { DragonService } from '../dragon/dragon.service';
import { Dragon } from '../dragon/dragon';

@Component({
  selector: 'ws-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.css']
})
export class DragonDetailComponent implements OnInit {

  dragonForm: FormGroup;

  id: string = '';
  dragon: Dragon;
  edit: boolean = false;
  
  alertVisible: boolean = false;
  alertText: string = "";
  alertType: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private dragonService: DragonService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getDragon();
  }

  getDragon() {
    this.dragonService
      .getDragonById(this.id)
      .subscribe( dragon => {
        if(dragon)
          this.dragon = dragon;
      }, err => {
        this.router.navigate(['*']);
      });
  }

  canEdit(value) {
    this.edit = value;
    this.dragonForm = this.formBuilder.group({
      dragonName: ['', Validators.required],
      dragonType: ['', Validators.required]
    });
  }

  editDragon() {
    let newDragon: Dragon = {
      'name': this.dragonForm.value.dragonName,
      'type': this.dragonForm.value.dragonType,
      'id': this.dragon.id,
      'history': this.dragon.history,
      'createdAt': this.dragon.createdAt
    }
    this.dragonService
      .updateDragon(newDragon)
      .subscribe(res => {
        this.getDragon();
        this.canEdit(false);
        this.showAlert(true, "Dragon edited", "success");
      }, err => {
        this.showAlert(true, `Error: status ${err.status} - ${err.statusText}`, "danger")
      });      
      setTimeout(()=>{
        this.showAlert(false);
      }, 5000);
  }

  showAlert(visible: boolean, text: string = '', type: string = '') {
    this.alertVisible = visible;
    this.alertText = text;
    this.alertType = type;    
  }
}
