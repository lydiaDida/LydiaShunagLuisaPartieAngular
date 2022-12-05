import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverHebergementComponent } from './reserver-hebergement.component';

describe('ReserverHebergementComponent', () => {
  let component: ReserverHebergementComponent;
  let fixture: ComponentFixture<ReserverHebergementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverHebergementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserverHebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
