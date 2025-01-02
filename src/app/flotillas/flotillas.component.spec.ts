import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotillasComponent } from './flotillas.component';

describe('FlotillasComponent', () => {
  let component: FlotillasComponent;
  let fixture: ComponentFixture<FlotillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlotillasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlotillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
