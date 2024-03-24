import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontofficeFooterComponent } from './frontoffice-footer.component';

describe('FrontofficeFooterComponent', () => {
  let component: FrontofficeFooterComponent;
  let fixture: ComponentFixture<FrontofficeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontofficeFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontofficeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
