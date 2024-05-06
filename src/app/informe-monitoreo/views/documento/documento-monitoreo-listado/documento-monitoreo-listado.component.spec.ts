import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentoMonitoreoListadoComponent } from './documento-monitoreo-listado.component';

describe('DocumentoMonitoreoListadoComponent', () => {
  let component: DocumentoMonitoreoListadoComponent;
  let fixture: ComponentFixture<DocumentoMonitoreoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentoMonitoreoListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentoMonitoreoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
