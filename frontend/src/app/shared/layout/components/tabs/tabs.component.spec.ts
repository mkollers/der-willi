import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, TestComponentRenderer, tick } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { TabsComponent } from './tabs.component';
import { ExpectedConditions } from 'protractor';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'tab1', component: TestComponentRenderer },
          { path: 'tab2', component: TestComponentRenderer }
        ]),
        MatTabsModule
      ],
      declarations: [TabsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    const router: Router = TestBed.get(Router);
    fixture = TestBed.createComponent(TabsComponent);
    fixture.ngZone.run(() => {
      router.navigateByUrl('/tab1');
      tick();
    });

    component = fixture.componentInstance;
    component.tabs = [{ name: 'Tab 1', url: '/tab1' }, { name: 'Tab 2', url: '/tab2' }];
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark tab as active', fakeAsync(() => {
    // Arrange
    const compiled = fixture.debugElement;
    const tab = compiled.query(By.css('.mat-tab-label-active'));

    // Assert
    expect(tab).toBeTruthy();
  }));
});
