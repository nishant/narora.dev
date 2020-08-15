import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent implements OnInit {
  items = {
    Github: {
      url: 'http://github.com/nishant',
      icon: 'fa-github',
      background: '#24282E'
    },
    YouTube: {
      url: 'https://www.youtube.com/channel/UCPaaYIhtC20QUtZfDW83ITA/',
      icon: 'fa-youtube',
      background: '#FF0100'
    },
    Instagram: {
      url: 'https://www.instagram.com/narora101/',
      icon: 'fa-instagram',
      background: '#DA2B96'
    },
    LinkedIn: {
      url: 'https://www.linkedin.com/in/nishant-arora-umd/',
      icon: 'fa-linkedin',
      background: '#0077B5'
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
