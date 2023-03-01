import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiUsersComponent } from './admi-users.component';

describe('AdmiUsersComponent', () => {
  let component: AdmiUsersComponent;
  let fixture: ComponentFixture<AdmiUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
