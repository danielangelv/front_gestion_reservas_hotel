import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHotelesComponent } from './gestion-hoteles.component';

describe('GestionHotelesComponent', () => {
  let component: GestionHotelesComponent;
  let fixture: ComponentFixture<GestionHotelesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionHotelesComponent]
    });
    fixture = TestBed.createComponent(GestionHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
