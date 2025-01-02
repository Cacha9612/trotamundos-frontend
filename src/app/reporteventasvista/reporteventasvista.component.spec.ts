import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteventasvistaComponent } from './reporteventasvista.component';

describe('ReporteventasvistaComponent', () => {
  let component: ReporteventasvistaComponent;
  let fixture: ComponentFixture<ReporteventasvistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReporteventasvistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteventasvistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
