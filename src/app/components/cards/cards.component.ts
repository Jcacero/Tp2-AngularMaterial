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
        direc: '/buzos'
      },
      {
        titulo: 'Remeras',
        imagen: 'https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/242192348_1057916521686621_4794815972933518487_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFO6v3cbKrwpL0GfyaxlbOCvKEoB1-aakW8oSgHX5pqRRgPgxaV9iVTbTHZ6aMFK8lukTTk2xLXGYU8JDLk1DVZ&_nc_ohc=a9d5qkPgPPMAX_v-EcG&_nc_oc=AQklxyfnhM-OJIQpIz8vmKpbDV2_vB7wmBC4uJ3CRr57ch6Lg1O8YAIMIbpNtkxeKcc&_nc_ht=scontent.faep9-2.fna&oh=00_AT9ue-9DjYOLBRSZnv35jscICfyZ6G21POp-47MKDRPoLA&oe=62AEE8D2',
        direc: '/remeras'

      },
      {
        titulo: 'Camperas',
        imagen: 'https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/279860122_1202046493940289_5347664077626050814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHeyyh3HGcPZRkTbLzlVGKv3g4W89XbyeneDhbz1dvJ6Z5_SKiTUNkbb6jQDg5QtCcM4K4LPRxdO1XiVucDn-CV&_nc_ohc=_XJDcub8qKYAX9Wd4LX&_nc_ht=scontent.faep9-2.fna&oh=00_AT8pQ5JEkfK1QM-s7Q1h5ciSwj19IcXzAYsJ_cp2MT2UsA&oe=62AEF5AD',
        direc: '/camperas'

      }
    ]
  }

  ngOnInit(): void {
  }

}
