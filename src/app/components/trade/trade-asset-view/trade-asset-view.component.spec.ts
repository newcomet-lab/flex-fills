import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeAssetViewComponent } from './trade-asset-view.component';

describe('TradeAssetViewComponent', () => {
  let component: TradeAssetViewComponent;
  let fixture: ComponentFixture<TradeAssetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeAssetViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeAssetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
