import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsIndexComponent } from './markets-index.component';

describe('MarketsIndexComponent', () => {
  let component: MarketsIndexComponent;
  let fixture: ComponentFixture<MarketsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
