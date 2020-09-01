import {CarouselItem} from '../../typings/carousel-item';

interface ProjectsData {
  CarouselItems: Array<CarouselItem>;
}

export const projectsData: ProjectsData = {
  CarouselItems: [
    {
      icon: 'ruby-logo.png',
      background: '#4CC9F0',
      description: 'A Discord server chatbot that responds to a variety of available commands by querying data ' +
        'from third-party APIs.',
      title: 'bot nish',
      url: 'http://github.com/nishant',
      technology: 'Ruby'
    },
    {
      icon: 'angular-logo.svg',
      background: '#7209B7',
      description: 'I am a project',
      title: 'narora.dev',
      url: 'http://github.com/nishant',
      technology: 'Angular 9'
    },
    {
      icon: 'swift-logo.png',
      background: '#3F37C9',
      description: 'I am a project',
      title: 'day2day',
      url: 'http://github.com/nishant',
      technology: 'Swift'
    }
  ]
};
