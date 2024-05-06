import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsayoMonitoreoDetalleComponent } from './ensayo-monitoreo-detalle.component';

describe('EnsayoMonitoreoDetalleComponent', () => {
  let component: EnsayoMonitoreoDetalleComponent;
  let fixture: ComponentFixture<EnsayoMonitoreoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnsayoMonitoreoDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsayoMonitoreoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
