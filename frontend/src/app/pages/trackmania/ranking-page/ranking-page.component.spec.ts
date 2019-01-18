import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderServiceMock } from '../../../../mocks/header-service.mock';
import { MatDialogMock } from '../../../../mocks/mat-dialog.mock';
import { TitleMock } from '../../../../mocks/title.mock';
import { HeaderService } from '../../../shared/layout/services/header.service';
import { RankingPageComponent } from './ranking-page.component';

describe('RankingPageComponent', () => {
  let component: RankingPageComponent;
  let fixture: ComponentFixture<RankingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RankingPageComponent],
      imports: [
        MatTableModule,
        RouterTestingModule
      ],
      providers: [
        { provide: HeaderService, useClass: HeaderServiceMock },
        { provide: MatDialog, useClass: MatDialogMock },
        { provide: Title, useClass: TitleMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
