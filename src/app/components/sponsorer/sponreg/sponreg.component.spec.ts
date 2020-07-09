import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponregComponent } from './sponreg.component';

describe('SponregComponent', () => {
  let component: SponregComponent;
  let fixture: ComponentFixture<SponregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
