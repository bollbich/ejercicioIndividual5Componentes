import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarResultadoComponent } from './mostrar-resultado.component';

describe('MostrarResultadoComponent', () => {
  let component: MostrarResultadoComponent;
  let fixture: ComponentFixture<MostrarResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
