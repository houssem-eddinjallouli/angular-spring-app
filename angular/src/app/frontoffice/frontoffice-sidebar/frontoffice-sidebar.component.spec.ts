import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontofficeSidebarComponent } from './frontoffice-sidebar.component';

describe('FrontofficeSidebarComponent', () => {
  let component: FrontofficeSidebarComponent;
  let fixture: ComponentFixture<FrontofficeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontofficeSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontofficeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
