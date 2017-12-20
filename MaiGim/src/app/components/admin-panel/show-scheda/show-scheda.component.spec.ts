import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSchedaComponent } from './show-scheda.component';

describe('ShowSchedaComponent', () => {
  let component: ShowSchedaComponent;
  let fixture: ComponentFixture<ShowSchedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSchedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSchedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
