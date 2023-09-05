import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrophoneListComponent } from './microphone-list.component';

describe('MicrophoneListComponent', () => {
  let component: MicrophoneListComponent;
  let fixture: ComponentFixture<MicrophoneListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicrophoneListComponent]
    });
    fixture = TestBed.createComponent(MicrophoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
