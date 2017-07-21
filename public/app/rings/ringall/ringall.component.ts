import {Component} from '@angular/core';

import {RingsService} from '../rings.service';

@Component({
	selector: 'rings',
	templateUrl: 'app/rings/ringall/ringall.component.html'
})
export class RingallComponent{
	articles: any;
	errorMessage: string;

	constructor(private _ringsService: RingsService) {}

	ngOnInit() {
		this._ringsService.list().subscribe(articles  => this.articles = articles);
	}
}
