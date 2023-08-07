import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie3Component } from './partie3.component';

describe('Partie3Component', () => {
  let component: Partie3Component;
  let fixture: ComponentFixture<Partie3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Partie3Component]
    });
    fixture = TestBed.createComponent(Partie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
