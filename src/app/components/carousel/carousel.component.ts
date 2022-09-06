import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

	products:Product[];
	responsiveOptions;

  constructor() { 

    this.products=[
      {
        id:"rr1",
        code:"3432",
        name:"Buzo rojo",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/294995508_1257032698441668_6839338054066685435_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=9P1M1rPGLCkAX_VganV&_nc_ht=scontent.faep9-1.fna&oh=00_AT9X43sGMS7waMGHEBRSMxGRFoUr1BbhWwond2zCzkED1A&oe=631C2709",
        rating:5,
      },
      {
        id:"ddfd",
        code:"3432",
        name:"Ropa re facha",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-3.fna.fbcdn.net/v/t39.30808-6/294770932_1256525161825755_1004052356187876330_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=wTSiE3tK0T4AX9k0uad&_nc_ht=scontent.faep9-3.fna&oh=00_AT88SI5kArOFvG4WkypK4-RrJozdTXK3v9z0N2XCrNBEfg&oe=631D2A62",
        rating:5,
      },
      {
        id:"ddfd",
        code:"3432",
        name:"34332",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/294762800_1257032705108334_7509709136623835393_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=jJ-2uH1pyYgAX8do4Yj&_nc_ht=scontent.faep9-1.fna&oh=00_AT8K1RtVRB80LscqstNG1_xDp9vI_z4KejqgNtsRRL-fdQ&oe=631BF5DF",
        rating:5,
      },
      {
        id:"ddfd",
        code:"3432",
        name:"34332",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/286748304_1231794237632181_3926014085538913153_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=j7BIy06R_PsAX8KzIHl&_nc_ht=scontent.faep9-2.fna&oh=00_AT9qCC4iNDf7kL5AXq-dXh4cSvBRRRCXTc9zvsjye49ytA&oe=631CE113",
        rating:5,
      },
      {
        id:"ddfd",
        code:"3432",
        name:"34332",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/279860122_1202046493940289_5347664077626050814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=Ain-NhlM60gAX_hXzu_&_nc_ht=scontent.faep9-2.fna&oh=00_AT-gEfSeeNBt5n6JihSuVX7UemGjFUItHUQWTdLWOO2MQQ&oe=631BB96D",
        rating:5,
      },
      {
        id:"ddfd",
        code:"3432",
        name:"34332",
        description:"23423gfgd",
        price:2000,
        quantity:342,
        inventoryStatus:"CON STOCK",
        category:"ropa",
        image:"https://scontent.faep9-3.fna.fbcdn.net/v/t39.30808-6/277590476_1185591032252502_9130951049090838496_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=PEE3yBmzm-IAX-BJ9Ta&_nc_ht=scontent.faep9-3.fna&oh=00_AT9P_k2fsEW9eZWnBsrjuQsjpIWzh8J0u9wEXHcixasm5g&oe=631B7CA1",
        rating:5,
      }
      
    ]

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
  
  }

}
