import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtvshowComponent } from './searchtvshow.component';

describe('SearchtvshowComponent', () => {
  let component: SearchtvshowComponent;
  let fixture: ComponentFixture<SearchtvshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtvshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
