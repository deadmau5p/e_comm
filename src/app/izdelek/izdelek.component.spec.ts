import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzdelekComponent } from './izdelek.component';

describe('IzdelekComponent', () => {
  let component: IzdelekComponent;
  let fixture: ComponentFixture<IzdelekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzdelekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzdelekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
