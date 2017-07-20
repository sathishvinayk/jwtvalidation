import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RingsRoutes } from './rings.routes';
import { RingsComponent } from './rings.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(RingsRoutes),
  ],
  declarations: [
    RingsComponent,
    CreateComponent,
    ListComponent,
    ViewComponent,
    EditComponent,
  ]
})
export class RingsModule {}
