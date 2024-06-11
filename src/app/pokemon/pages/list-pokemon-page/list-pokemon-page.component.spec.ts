import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPokemonPageComponent } from './list-pokemon-page.component';

describe('ListPokemonPageComponent', () => {
  let component: ListPokemonPageComponent;
  let fixture: ComponentFixture<ListPokemonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPokemonPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
