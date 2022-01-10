import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageChatDetailComponent } from './message-chat-detail.component';

describe('MessageChatDetailComponent', () => {
  let component: MessageChatDetailComponent;
  let fixture: ComponentFixture<MessageChatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageChatDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageChatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
