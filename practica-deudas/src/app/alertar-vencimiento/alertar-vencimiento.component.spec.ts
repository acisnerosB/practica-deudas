import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertarVencimientoComponent } from './alertar-vencimiento.component';

describe('AlertarVencimientoComponent', () => {
  let component: AlertarVencimientoComponent;
  let fixture: ComponentFixture<AlertarVencimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertarVencimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertarVencimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
