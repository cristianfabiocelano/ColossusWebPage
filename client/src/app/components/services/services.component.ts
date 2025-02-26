import { Component } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  animations: [
    trigger('staggerIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ServicesComponent {
  services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions designed to meet your specific business needs and challenges.',
      icon: 'code'
    },
    {
      title: 'Cloud Integration',
      description: 'Seamless cloud solutions that scale with your business and enhance productivity.',
      icon: 'cloud'
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic guidance and implementation to modernize your business processes.',
      icon: 'trending_up'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your valuable business assets.',
      icon: 'security'
    }
  ];
}
