import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageIzqPage } from './page-izq.page';

describe('PageIzqPage', () => {
  let component: PageIzqPage;
  let fixture: ComponentFixture<PageIzqPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIzqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
