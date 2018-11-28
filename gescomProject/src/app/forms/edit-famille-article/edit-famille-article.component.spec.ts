import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFamilleArticleComponent } from './edit-famille-article.component';

describe('EditFamilleArticleComponent', () => {
  let component: EditFamilleArticleComponent;
  let fixture: ComponentFixture<EditFamilleArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFamilleArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFamilleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
