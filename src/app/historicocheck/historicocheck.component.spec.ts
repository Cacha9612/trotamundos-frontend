import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricocheckComponent } from './historicocheck.component';

describe('HistoricocheckComponent', () => {
  let component: HistoricocheckComponent;
  let fixture: ComponentFixture<HistoricocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricocheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
