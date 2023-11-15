import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanksInfoComponent } from './banks-info.component';

describe('BanksInfoComponent', () => {
  let component: BanksInfoComponent;
  let fixture: ComponentFixture<BanksInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanksInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanksInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
