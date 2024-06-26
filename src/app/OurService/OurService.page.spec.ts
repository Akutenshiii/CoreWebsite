import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { OurServicePage } from './OurService.page';

describe('OurServicePage', () => {
  let component: OurServicePage;
  let fixture: ComponentFixture<OurServicePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurServicePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OurServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
