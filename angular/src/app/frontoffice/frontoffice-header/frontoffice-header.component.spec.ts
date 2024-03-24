import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontofficeHeaderComponent } from './frontoffice-header.component';

describe('FrontofficeHeaderComponent', () => {
  let component: FrontofficeHeaderComponent;
  let fixture: ComponentFixture<FrontofficeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontofficeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontofficeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
