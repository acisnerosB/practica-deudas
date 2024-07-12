import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarComoPagadoComponent } from './marcar-como-pagado.component';

describe('MarcarComoPagadoComponent', () => {
  let component: MarcarComoPagadoComponent;
  let fixture: ComponentFixture<MarcarComoPagadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcarComoPagadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcarComoPagadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
