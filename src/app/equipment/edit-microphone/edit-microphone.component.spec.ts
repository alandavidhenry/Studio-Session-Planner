import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMicrophoneComponent } from './edit-microphone.component';

describe('EditMicrophoneComponent', () => {
  let component: EditMicrophoneComponent;
  let fixture: ComponentFixture<EditMicrophoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMicrophoneComponent]
    });
    fixture = TestBed.createComponent(EditMicrophoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
