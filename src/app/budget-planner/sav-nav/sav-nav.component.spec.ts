import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavNavComponent } from './sav-nav.component';

describe('SavNavComponent', () => {
  let component: SavNavComponent;
  let fixture: ComponentFixture<SavNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
