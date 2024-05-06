import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsayoMonitoreoListadoComponent } from './ensayo-monitoreo-listado.component';

describe('EnsayoMonitoreoListadoComponent', () => {
  let component: EnsayoMonitoreoListadoComponent;
  let fixture: ComponentFixture<EnsayoMonitoreoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnsayoMonitoreoListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsayoMonitoreoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
