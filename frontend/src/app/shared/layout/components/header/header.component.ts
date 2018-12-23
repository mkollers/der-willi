import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { HeaderService } from './../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headline$: Observable<string>;

  constructor(headerService: HeaderService) {
    this.headline$ = headerService.headline$;
  }
}
