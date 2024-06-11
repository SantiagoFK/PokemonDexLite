import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexLitePageComponent } from './pokedex-lite-page.component';

describe('PokedexLitePageComponent', () => {
  let component: PokedexLitePageComponent;
  let fixture: ComponentFixture<PokedexLitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokedexLitePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexLitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
