import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriaDetalleComponenteComponent } from './categoria-detalle-componente.component';

describe('CategoriaDetalleComponenteComponent', () => {
  let component: CategoriaDetalleComponenteComponent;
  let fixture: ComponentFixture<CategoriaDetalleComponenteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDetalleComponenteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaDetalleComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
