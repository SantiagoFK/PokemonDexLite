import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOnePokemonComponent } from './list-one-pokemon.component';

describe('ListOnePokemonComponent', () => {
  let component: ListOnePokemonComponent;
  let fixture: ComponentFixture<ListOnePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOnePokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOnePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
