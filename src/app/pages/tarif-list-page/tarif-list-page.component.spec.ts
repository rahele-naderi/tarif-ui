import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifListPageComponent } from './tarif-list-page.component';
import { By } from '@angular/platform-browser';
import { TarifListComponent } from '../../features/tarifs/components/tarif-list/tarif-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TarifListPageComponent', () => {
  let component: TarifListPageComponent;
  let fixture: ComponentFixture<TarifListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifListPageComponent],
    })
    .overrideComponent(TarifListPageComponent, {
      remove: { imports: [TarifListComponent] },
      add: { schemas: [CUSTOM_ELEMENTS_SCHEMA] }
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarifListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tarif-list component', () => {
    const tarifList = fixture.debugElement.query(By.css('vrx-tarif-list'));
    expect(tarifList).not.toBeNull();
  });
  
});
