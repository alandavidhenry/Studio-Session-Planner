import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMicrophoneComponent } from './add-microphone.component';

describe('AddMicrophoneComponent', () => {
  let component: AddMicrophoneComponent;
  let fixture: ComponentFixture<AddMicrophoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMicrophoneComponent]
    });
    fixture = TestBed.createComponent(AddMicrophoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
