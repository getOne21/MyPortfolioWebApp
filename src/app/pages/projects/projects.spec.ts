import { TestBed } from '@angular/core/testing';

import { Projects } from './projects';

describe('Projects page screenshots', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ imports: [Projects] });
  });

  it('shows Calctron screenshots before the project details are expanded', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const calctronCard = Array.from(
      fixture.nativeElement.querySelectorAll('.project-card') as NodeListOf<HTMLElement>
    ).find(card => card.querySelector('h2')?.textContent?.trim() === 'Calctron');

    expect(calctronCard?.querySelectorAll('.screenshot-card img')).toHaveLength(3);
    expect(calctronCard?.querySelector('.expanded-content')).toBeNull();
  });
});
