import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexLiteComponent } from './pokedex-lite.component';

describe('PokedexLiteComponent', () => {
  let component: PokedexLiteComponent;
  let fixture: ComponentFixture<PokedexLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokedexLiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
