import { Component } from '@angular/core';
import { RingsService } from './rings.service';

@Component({
  selector: 'rings',
  template: '<router-outlet></router-outlet>',
  providers: [RingsService]
})
export class RingsComponent {}
