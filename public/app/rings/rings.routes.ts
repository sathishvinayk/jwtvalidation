import { Routes } from '@angular/router';
import { RingsComponent } from './rings.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

export const RingsRoutes: Routes = [{
  path: 'arts',
  component: RingsComponent,
  children: [
  	{path: '', component: ListComponent},
  	{path: 'create', component: CreateComponent}
  ],
}];
