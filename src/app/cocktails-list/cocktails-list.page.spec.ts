import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktailsListPage } from './cocktails-list.page';

describe('CocktailsListPage', () => {
  let component: CocktailsListPage;
  let fixture: ComponentFixture<CocktailsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
