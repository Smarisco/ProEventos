import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApNavComponent } from './ap-nav.component';

describe('ApNavComponent', () => {
  let component: ApNavComponent;
  let fixture: ComponentFixture<ApNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
