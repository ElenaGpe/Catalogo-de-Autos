import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditAddComponent } from './modalEditAdd.component';

describe('ModalEditAddComponent', () => {
  let component: ModalEditAddComponent;
  let fixture: ComponentFixture<ModalEditAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
