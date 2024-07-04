import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortlDashboardComponent } from './portl-dashboard.component';
import {MatIconModule} from '@angular/material/icon';


describe('PortlDashboardComponent', () => {
  let component: PortlDashboardComponent;
  let fixture: ComponentFixture<PortlDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortlDashboardComponent,MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortlDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
