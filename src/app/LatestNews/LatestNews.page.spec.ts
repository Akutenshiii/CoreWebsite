import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LatestNewsPage } from './LatestNews.page';

describe('LatestNewsPage', () => {
  let component: LatestNewsPage;
  let fixture: ComponentFixture<LatestNewsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestNewsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LatestNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
