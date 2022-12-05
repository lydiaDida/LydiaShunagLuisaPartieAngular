import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeberpementsLocataireComponent } from './heberpements-locataire.component';

describe('HeberpementsLocataireComponent', () => {
  let component: HeberpementsLocataireComponent;
  let fixture: ComponentFixture<HeberpementsLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeberpementsLocataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeberpementsLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
