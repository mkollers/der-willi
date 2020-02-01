import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import * as faker from 'faker';
import { of } from 'rxjs';

import { AuthServiceMock } from '../../../../mocks/auth-service.mock';
import { HeaderServiceMock } from '../../../../mocks/header-service.mock';
import { MatDialogRefMock } from '../../../../mocks/mat-dialog-ref.mock';
import { MatDialogMock } from '../../../../mocks/mat-dialog.mock';
import { TitleMock } from '../../../../mocks/title.mock';
import { AuthService } from '../../../shared/auth/services/auth.service';
import { HeaderService } from '../../../shared/layout/services/header.service';
import { CreateRoundDialogComponent } from '../../../shared/trackmania/dialogs/create-round-dialog/create-round-dialog.component';
import { TrackTimesDialogComponent } from '../../../shared/trackmania/dialogs/track-times-dialog/track-times-dialog.component';
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
        { provide: AuthService, useClass: AuthServiceMock },
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

  describe('start', () => {
    let dialog: MatDialogMock;

    beforeEach(() => {
      dialog = TestBed.get(MatDialog);
    });

    // it('should open the dialog for a new round', fakeAsync(() => {
    //   // Arrange
    //   spyOn(dialog, 'open').and.returnValue(new MatDialogRefMock());

    //   // Act
    //   component.start();
    //   tick();

    //   // Assert
    //   expect(dialog.open).toHaveBeenCalledWith(CreateRoundDialogComponent, {
    //     panelClass: 'fullscreen-mobile'
    //   });
    // }));

    // it('should open the dialog for tracking a round', fakeAsync(() => {
    //   // Arrange
    //   const names = [faker.name.firstName(), faker.name.firstName()];
    //   const dialogRef = new MatDialogRefMock();
    //   spyOn(dialogRef, 'beforeClosed').and.returnValues(of(names), of(null));
    //   spyOn(dialog, 'open').and.returnValue(dialogRef);

    //   // Act
    //   component.start();
    //   tick();

    //   // Assert
    //   expect(dialog.open).toHaveBeenCalledWith(TrackTimesDialogComponent, {
    //     data: names,
    //     panelClass: 'fullscreen-mobile'
    //   });
    // }));

    // it('should open the dialog for another tracking a round', fakeAsync(() => {
    //   // Arrange
    //   const names = [faker.name.firstName(), faker.name.firstName()];
    //   const dialogRef = new MatDialogRefMock();
    //   spyOn(dialogRef, 'beforeClosed').and.returnValues(of(names), of(true), of(false));
    //   spyOn(dialog, 'open').and.returnValue(dialogRef);

    //   // Act
    //   component.start();
    //   tick();

    //   // Assert
    //   expect(dialog.open).toHaveBeenCalledTimes(3);
    // }));
  });
});
