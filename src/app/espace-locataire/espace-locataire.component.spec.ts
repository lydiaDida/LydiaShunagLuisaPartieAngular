import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceLocataireComponent } from './espace-locataire.component';

describe('EspaceLocataireComponent', () => {
  let component: EspaceLocataireComponent;
  let fixture: ComponentFixture<EspaceLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceLocataireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
