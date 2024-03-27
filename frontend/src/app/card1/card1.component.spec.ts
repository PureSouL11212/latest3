import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BurgerComponent } from '../folder/burger/burger.component';
import { Card1Component } from './card1.component';
describe('Card1Component', () => {
  let component: Card1Component;
  let fixture: ComponentFixture<Card1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card1Component,BurgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Card1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
