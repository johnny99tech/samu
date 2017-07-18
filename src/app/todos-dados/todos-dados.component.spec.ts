import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDadosComponent } from './todos-dados.component';

describe('TodosDadosComponent', () => {
  let component: TodosDadosComponent;
  let fixture: ComponentFixture<TodosDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
