import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTvshowComponent } from './carousel-tvshow.component';

describe('CarouselTvshowComponent', () => {
  let component: CarouselTvshowComponent;
  let fixture: ComponentFixture<CarouselTvshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselTvshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
