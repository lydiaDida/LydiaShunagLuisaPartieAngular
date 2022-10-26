import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceProprietaireComponent } from './espace-proprietaire.component';

describe('EspaceProprietaireComponent', () => {
  let component: EspaceProprietaireComponent;
  let fixture: ComponentFixture<EspaceProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceProprietaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
