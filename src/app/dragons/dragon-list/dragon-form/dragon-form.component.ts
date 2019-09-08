import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DragonService } from '../../dragon/dragon.service';
import { DragonListComponent } from '../dragon-list.component';

@Component({
  selector: 'ws-dragon-form',
  templateUrl: './dragon-form.component.html',
  styleUrls: ['./dragon-form.component.css']
})
export class DragonFormComponent implements OnInit {
  @Input() name;

  registerForm: FormGroup;
    
  constructor(
      private formBuilder: FormBuilder,
      public activeModal: NgbActiveModal,
      private dragonService: DragonService) { }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
          dragonName: ['', Validators.required],
          dragonType: ['', Validators.required],
          dragonHistory: ['']
      });  
  }

  createDragon(): void {
    let newDragon = {
      'name': this.registerForm.value.dragonName,
      'type': this.registerForm.value.dragonType,
      'history': this.registerForm.value.dragonHistory,
      'createdAt': new Date()
    }
    
    this.dragonService
      .createDragon(newDragon)
      .subscribe(res => {
        this.activeModal.close({ 
          status: 'success',
          message: res
        });
      }, err => {
        this.activeModal.close({ 
          status: 'error',
          message: err
        });
    });      
  }

}
