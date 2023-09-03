import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrophoneDetailsComponent } from './microphone-details.component';

describe('MicrophoneDetailsComponent', () => {
  let component: MicrophoneDetailsComponent;
  let fixture: ComponentFixture<MicrophoneDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicrophoneDetailsComponent]
    });
    fixture = TestBed.createComponent(MicrophoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
