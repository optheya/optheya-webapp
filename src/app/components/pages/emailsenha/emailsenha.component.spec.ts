import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsenhaComponent } from './emailsenha.component';

describe('EmailsenhaComponent', () => {
  let component: EmailsenhaComponent;
  let fixture: ComponentFixture<EmailsenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailsenhaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
