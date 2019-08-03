import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUXComponent } from './client-ux.component';

describe('AddClientComponent', () => {
  let component: ClientUXComponent;
  let fixture: ComponentFixture<ClientUXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientUXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
