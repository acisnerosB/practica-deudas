import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDeudaComponent } from './registrar-deuda.component';

describe('RegistrarDeudaComponent', () => {
  let component: RegistrarDeudaComponent;
  let fixture: ComponentFixture<RegistrarDeudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarDeudaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarDeudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
