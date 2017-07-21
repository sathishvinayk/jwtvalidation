import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RingsRoutes } from './rings.routes';
import { RingsComponent } from './rings.component';
import { RingCreateComponent } from './ringcreate/ringcreate.component';
import { RingallComponent } from './ringall/ringall.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(RingsRoutes),
  ],
  declarations: [
    RingsComponent,
    RingCreateComponent,
    RingallComponent,
  ]
})
export class RingsModule {}
