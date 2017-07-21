import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {RingsService} from '../rings.service';

@Component({
  selector: 'ringcreate',
  templateUrl: 'app/rings/ringcreate/ringcreate.component.html'
})
export class RingCreateComponent {
	article: any = {};
	errorMessage: string;

	constructor(private _router:Router,
				private _ringsService: RingsService) {}

	create() {
		this._ringsService.create(this.article).subscribe(createdArticle => this._router.navigate(['/rings']),
							 				  				 error =>  this.errorMessage = error);
	}
}
