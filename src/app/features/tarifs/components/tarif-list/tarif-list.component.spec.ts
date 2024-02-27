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

  it('should call filterList when download search input changes', () => {
    const filterListSpy = spyOn(component, 'filterList');

    component.searchDownloadControl.setValue('12');

    expect(filterListSpy).toHaveBeenCalledTimes(1);
  });

  it('should call filterList when upload search input changes', () => {
    const filterListSpy = spyOn(component, 'filterList');

    component.searchUploadControl.setValue('6');

    expect(filterListSpy).toHaveBeenCalledTimes(1);
  });

  it('should call filterList when price search input changes', () => {
    const filterListSpy = spyOn(component, 'filterList');

    component.searchPriceControl.setValue('123.45');

    expect(filterListSpy).toHaveBeenCalledTimes(1);
  });

  it('should return list when download is set correctly', () => {
    const result = component.filterList([[{ name: 'test', benefits: [], download: 12, upload: 6, price: 123 }], '12', '', '']);

    expect(result).toEqual([{ name: 'test', benefits: [], download: 12, upload: 6, price: 123 }]);
  });

  it('should return list when download is not set correctly', () => {
    const result = component.filterList([[{ name: 'test', benefits: [], download: 12, upload: 6, price: 123 }], '11', '', '']);

    expect(result).toEqual([]);
  });

  it('should return list when upload is set correctly', () => {
    const result = component.filterList([[{ name: 'test', benefits: [], download: 12, upload: 6, price: 123 }], '', '6', '']);

    expect(result).toEqual([{ name: 'test', benefits: [], download: 12, upload: 6, price: 123 }]);
  });

  it('should return list when upload is not set correctly', () => {
    const result = component.filterList([[{ name: 'test', benefits: [], download: 12, upload: 6, price: 123 }], '', '5', '']);

    expect(result).toEqual([]);
  });

  it('should return list when price is set correctly', () => {
    const result = component.filterList([[{ name: 'test', benefits: [], download: 12, upload: 6, price: 123 }], '', '', '123']);

    expect(result).toEqual([{ name: 'test', benefits: [], download: 12, upload: 6, price: 123 }]);
  });

  it('should return list when price is not set correctly', () => {
    const result = component.filterList([[{ name: 'test', benefits: [], download: 12, upload: 6, price: 123 }], '', '', '122']);

    expect(result).toEqual([]);
  });
});
