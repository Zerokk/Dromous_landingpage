import { Component } from '@angular/core';

@Component({
selector: 'app-screenshot',
templateUrl: './screenshot.component.html',
styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent {

constructor() { }

	// Carousel Images
	public carouselImages = [
		{
			image: 'assets/images/app/1.PNG',
		},
		{
			image: 'assets/images/app/2.PNG',
		},
		{
			image: 'assets/images/app/3.PNG',
		},
		{
			image: 'assets/images/app/4.PNG',
		},
		{
			image: 'assets/images/app/5.PNG',
		},
		{
			image: 'assets/images/app/6.PNG',
		},
		{
			image: 'assets/images/app/7.PNG',
		},
		{
			image: 'assets/images/app/8.PNG',
		},
		{
			image: 'assets/images/app/9.PNG',
		},
		{
			image: 'assets/images/app/10.PNG',
		},
	];

	// Carousel Options
	public carouselOptions: any = {
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		center: true,
		autoplay: true,
		autoplayTimeout: 8000,
		responsive: {
			0: {
				items: 2,
			},
			767: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1200: {
				items: 5
			}
		}
	};


}
