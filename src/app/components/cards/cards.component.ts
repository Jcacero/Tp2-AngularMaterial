import { Component, OnInit } from '@angular/core';
import { RopaCard } from "src/app/model/ropa-card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public info: RopaCard [];

  constructor() {
    this.info=[
      {
        titulo: 'Buzos',
        imagen: 'https://scontent.faep9-1.fna.fbcdn.net/v/t39.30808-6/278950551_1193749894769949_1413110495423669914_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=kEUUMFL5wQkAX8hPRuy&_nc_ht=scontent.faep9-1.fna&oh=00_AT-j2_Miw2d-pzwVk33EFYxCY0JzehjQEKA6UIeelWLv8A&oe=6298CAA9',
        direc: '/buzos'
      },
      {
        titulo: 'Remeras',
        imagen: 'https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/242192348_1057916521686621_4794815972933518487_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=ICU_cKanDqkAX9AhUqf&_nc_ht=scontent.faep9-2.fna&oh=00_AT8hTNLdWAEwutKaVF4Uf57i451Dec2vIePtBZ0pS4GC7A&oe=62992812',
        direc: '/remeras'

      },
      {
        titulo: 'Camperas',
        imagen: 'https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/279860122_1202046493940289_5347664077626050814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=xBZnaHl0zqoAX-A2RJd&_nc_ht=scontent.faep9-2.fna&oh=00_AT_2vAJxonazChwCxoABXzQr_ZINF5eF2PYf-Sl7YMj1Gw&oe=62973AAD',
        direc: '/camperas'

      }
    ]
  }

  ngOnInit(): void {
  }

}
