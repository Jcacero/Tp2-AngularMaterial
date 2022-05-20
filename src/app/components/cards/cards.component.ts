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
        imagen: 'https://scontent.faep9-3.fna.fbcdn.net/v/t39.30808-6/277590476_1185591032252502_9130951049090838496_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEHsiJpBCD0WNk3BC2nDeBkOL0mwxpJ8s04vSbDGknyzd2lVy4YcsGn12AHft9ZRmHuAu5ASDyVUwwPYf2CMri_&_nc_ohc=xviO16612P4AX88SVTD&_nc_ht=scontent.faep9-3.fna&oh=00_AT93ZJSquhxEe5RtMcHTEEVoEJvpHOTt4yfXhMhzsafuGQ&oe=628D1AA1'
      },
      {
        titulo: 'Remeras',
        imagen: 'https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/242756127_1059376114873995_6405233118640401826_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGnR9lVSIQCgSn4dK46mJFq-AkFf8xhAeX4CQV_zGEB5Xx42NeeQMCn4M0S-0-Wwx5IMfpiYYbIkQtYHzPFkDsD&_nc_ohc=0Imd__USFj8AX_AunFm&_nc_ht=scontent.faep9-2.fna&oh=00_AT9HwZQjj76z57mDK_w035JOMm9GKC4PxG6cdHxtFcrIkA&oe=628CFFAB'
      },
      {
        titulo: 'Pantalones',
        imagen: 'https://scontent.faep9-2.fna.fbcdn.net/v/t39.30808-6/278447877_1188799911931614_3537392837344856314_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGy2oQCdjl03NkLMdzRZGHkJ-bK7YKJDUgn5srtgokNSEuqXcIDojqvMkuFNX0jWtjCkaq0vU2EI7-8SeM-bVYJ&_nc_ohc=eopGIbjq7poAX-kpwgX&_nc_ht=scontent.faep9-2.fna&oh=00_AT_yY980hmxFvofg594Jb7aesS4vOyVvfk_67LpHrwjHkg&oe=628C5091'
      }
    ]
  }

  ngOnInit(): void {
  }

}
