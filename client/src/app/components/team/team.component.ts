import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent {
  team = [
    {
      name: 'Alex Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952'
    },
    {
      name: 'Sarah Chen',
      role: 'Solutions Architect',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf'
    },
    {
      name: 'Michael Thompson',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf'
    }
  ];
}
