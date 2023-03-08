import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionContactoComponent } from './gestion-contacto.component';

describe('GestionContactoComponent', () => {
  let component: GestionContactoComponent;
  let fixture: ComponentFixture<GestionContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
