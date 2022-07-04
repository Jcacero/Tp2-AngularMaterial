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
        imagen: 'https://scontent.faep9-1.fna.fbcdn.net/v/t1.6435-9/183482852_971332207011720_2445908391779531847_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFqjfGAdIHFHlCDmMts2sgzflZgdaRtjtF-VmB1pG2O0at8qwRFO6m62vzYprRKiruXSoTENsz1_iOW8YuirBAZ&_nc_ohc=G6buxbKG8MwAX9kT9W9&tn=IGdqUIN2GtmgkHO3&_nc_ht=scontent.faep9-1.fna&oh=00_AT9A1Q-1nqgLClYMbUQbsnDX3fnFnlrxhqXjR9ayy971BA&oe=62CF4600',
        direc: '/busos'
      },
      {
        titulo: 'Remeras',
        imagen: 'https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/283214549_1214587296019542_4809080955536090293_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=T0M6zPmruG4AX-5WG9o&_nc_ht=scontent.faep9-2.fna&oh=00_AT-gRem1ttbdmu1aUpRtG3E8N52ZqKlWncal8WoDLwU4iw&oe=62C8156A  ',
        direc: '/remeras'

      },
      {
        titulo: 'Camperas',
        imagen: 'https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/279860122_1202046493940289_5347664077626050814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=YReT5TKQ9WgAX_H1jIy&_nc_ht=scontent.faep9-2.fna&oh=00_AT8I4bD2gtwiQj70admkgXJcOe96rqa9kGVjqjhKBPN5hw&oe=62C8AAED',
        direc: '/camperas'

      }
    ]
  }

  ngOnInit(): void {
  }

}
