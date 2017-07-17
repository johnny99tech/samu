import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeçalhoComponent } from './cabeçalho.component';

describe('CabeçalhoComponent', () => {
  let component: CabeçalhoComponent;
  let fixture: ComponentFixture<CabeçalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeçalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeçalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
