import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InteractivePage } from './interactive.page';

describe('InteractivePage', () => {
  let component: InteractivePage;
  let fixture: ComponentFixture<InteractivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InteractivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
