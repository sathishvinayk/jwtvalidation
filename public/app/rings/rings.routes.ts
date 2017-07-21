import { Routes } from '@angular/router';
import { RingsComponent } from './rings.component';
import { RingCreateComponent } from './ringcreate/ringcreate.component';
import { RingallComponent } from './ringall/ringall.component';

export const RingsRoutes: Routes = [{
  path: 'rings',
  component: RingsComponent,
  children: [
  	{path: '', component: RingallComponent},
  	{path: 'ringcreate', component: RingCreateComponent}
  ],
}];
