import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RelatedAlbumsComponent } from './related-albums.component';

describe('RelatedAlbumsComponent', () => {
  let component: RelatedAlbumsComponent;
  let fixture: ComponentFixture<RelatedAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
