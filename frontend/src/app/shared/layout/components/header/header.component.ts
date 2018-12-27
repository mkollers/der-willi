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
  navigateBackUri$: Observable<string | any[]>;

  constructor(headerService: HeaderService) {
    this.headline$ = headerService.headline$;
    this.navigateBackUri$ = headerService.navigateBackUri$;
  }
}
