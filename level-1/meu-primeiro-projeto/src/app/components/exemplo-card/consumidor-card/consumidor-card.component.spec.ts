import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumidorCardComponent } from './consumidor-card.component';

describe('ConsumidorCardComponent', () => {
  let component: ConsumidorCardComponent;
  let fixture: ComponentFixture<ConsumidorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumidorCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumidorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
