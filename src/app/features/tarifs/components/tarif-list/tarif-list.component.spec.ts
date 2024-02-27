import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifListComponent } from './tarif-list.component';
import { GetTarifsService } from '../../services/get-tarifs.service';
import { of } from 'rxjs';

describe('TarifListComponent', () => {
  let component: TarifListComponent;
  let fixture: ComponentFixture<TarifListComponent>;
  const getTarifsServiceMock = { getTarifs: () => of([]) };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifListComponent],
      providers: [
        { provide: GetTarifsService, useValue: getTarifsServiceMock },
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
