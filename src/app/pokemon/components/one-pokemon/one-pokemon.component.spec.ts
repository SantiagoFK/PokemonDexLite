import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePokemonComponent } from './one-pokemon.component';

describe('OnePokemonComponent', () => {
  let component: OnePokemonComponent;
  let fixture: ComponentFixture<OnePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnePokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
