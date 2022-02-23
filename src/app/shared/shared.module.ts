import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModalComponent } from './components';


const comp = [CommonModalComponent];
@NgModule({
  declarations: [...comp],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
