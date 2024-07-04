import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortlLoginComponent } from './portl-login.component';

describe('PortlLoginComponent', () => {
  let component: PortlLoginComponent;
  let fixture: ComponentFixture<PortlLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortlLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortlLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
