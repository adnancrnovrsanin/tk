import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreneriListaComponent } from './treneri-lista.component';

describe('TreneriListaComponent', () => {
  let component: TreneriListaComponent;
  let fixture: ComponentFixture<TreneriListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreneriListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreneriListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
