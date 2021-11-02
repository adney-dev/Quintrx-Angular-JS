import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientconsentdocsComponent } from './clientconsentdocs.component';

describe('ClientconsentdocsComponent', () => {
  let component: ClientconsentdocsComponent;
  let fixture: ComponentFixture<ClientconsentdocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientconsentdocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientconsentdocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
