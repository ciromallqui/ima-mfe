import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoMonitoreoDetalleComponent } from './documento-monitoreo-detalle.component';

describe('DocumentoMonitoreoDetalleComponent', () => {
  let component: DocumentoMonitoreoDetalleComponent;
  let fixture: ComponentFixture<DocumentoMonitoreoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentoMonitoreoDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentoMonitoreoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
