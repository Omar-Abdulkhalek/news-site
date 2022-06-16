import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-world',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent implements OnInit {

  images:string[]=[]

  constructor() { 
    this.images=["assets/images/slider1.webp","assets/images/slider2.webp","assets/images/slider3.webp","assets/images/slider4.webp","assets/images/slider5.webp","assets/images/slider6.webp","assets/images/slider7.webp","assets/images/slider8.webp"]
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    
    autoHeight:true,
    dots:true,
    dotsEach:true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  ngOnInit(): void {
  }

}
