import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifListPageComponent } from './tarif-list-page.component';

describe('TarifListPageComponent', () => {
  let component: TarifListPageComponent;
  let fixture: ComponentFixture<TarifListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarifListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
