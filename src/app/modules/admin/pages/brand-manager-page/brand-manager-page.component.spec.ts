import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandManagerPage } from './brand-manager-page.component';

describe('BrandCreatePageComponent', () => {
  let component: BrandManagerPage;
  let fixture: ComponentFixture<BrandManagerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandManagerPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
