import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortlUserProfileComponent } from './portl-user-profile.component';

describe('PortlUserProfileComponent', () => {
  let component: PortlUserProfileComponent;
  let fixture: ComponentFixture<PortlUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortlUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortlUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
