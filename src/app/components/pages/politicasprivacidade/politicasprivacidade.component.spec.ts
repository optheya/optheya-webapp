import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticasprivacidadeComponent } from './politicasprivacidade.component';

describe('PoliticasprivacidadeComponent', () => {
  let component: PoliticasprivacidadeComponent;
  let fixture: ComponentFixture<PoliticasprivacidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticasprivacidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticasprivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
