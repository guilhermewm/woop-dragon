import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Dragon } from '../../dragon/dragon';

@Component({
  selector: 'ws-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnChanges {
  
  @Input() dragons: Dragon[] = [];
  rows: any[] = [];

  key: string = 'name'; //set default
  reverse: boolean = false;

  numberItens: number = 4;

  constructor() { }
    
  ngOnChanges(changes: SimpleChanges) {
    if(changes.dragons) 
      this.rows = this.groupColumns(this.dragons, this.numberItens);
  }

  groupColumns(dragons: Dragon[], numberItens: number) {
    console.log(dragons)
    const newRows = [];

    for(let index = 0; index < dragons.length; index+=numberItens) {
      newRows.push(dragons.slice(index, index + numberItens));
    }               
    console.log(newRows)             
    return newRows;
  }
}