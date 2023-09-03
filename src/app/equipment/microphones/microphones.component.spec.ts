import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrophonesComponent } from './microphones.component';

describe('MicrophonesComponent', () => {
  let component: MicrophonesComponent;
  let fixture: ComponentFixture<MicrophonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicrophonesComponent]
    });
    fixture = TestBed.createComponent(MicrophonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
