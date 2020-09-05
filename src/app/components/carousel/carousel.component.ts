import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../../typings/carousel-item';
import { projectsData } from '../../modules/projects/products.static.data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  items: Array<CarouselItem>;

  constructor() { }

  ngOnInit(): void {
    this.items = projectsData.CarouselItems;
  }
}
