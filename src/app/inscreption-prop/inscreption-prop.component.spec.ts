import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscreptionPropComponent } from './inscreption-prop.component';

describe('InscreptionPropComponent', () => {
  let component: InscreptionPropComponent;
  let fixture: ComponentFixture<InscreptionPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscreptionPropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscreptionPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
