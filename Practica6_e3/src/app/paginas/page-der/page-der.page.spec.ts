import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDerPage } from './page-der.page';

describe('PageDerPage', () => {
  let component: PageDerPage;
  let fixture: ComponentFixture<PageDerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
