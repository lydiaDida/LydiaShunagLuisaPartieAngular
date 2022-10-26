import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionPropComponent } from './connexion-prop.component';

describe('ConnexionPropComponent', () => {
  let component: ConnexionPropComponent;
  let fixture: ComponentFixture<ConnexionPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionPropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
