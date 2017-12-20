import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModSchedaComponent } from './mod-scheda.component';

describe('ModSchedaComponent', () => {
  let component: ModSchedaComponent;
  let fixture: ComponentFixture<ModSchedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModSchedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModSchedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
