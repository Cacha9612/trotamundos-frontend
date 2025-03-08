import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenservicesComponent } from './ordenservices.component';

describe('OrdenservicesComponent', () => {
  let component: OrdenservicesComponent;
  let fixture: ComponentFixture<OrdenservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenservicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
