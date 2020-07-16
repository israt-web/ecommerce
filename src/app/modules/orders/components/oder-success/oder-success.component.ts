import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-oder-success',
  templateUrl: './oder-success.component.html',
  styleUrls: ['./oder-success.component.scss']
})
export class OderSuccessComponent implements OnInit {

  @Input() data: any;



  businesses = [
    {
      images: 'http://www.pngmart.com/files/8/Mango-PNG-Image-Free-Download.png',
      title: 'Benginapalli Mangoes',
      sub_title: 'From Israt, Odisha',
      cancel_btn: 'Cancel',
      trackOrder_btn: 'Track Order',
      quantity: 'Quantity',
      unit: '200kg'
    },
    {
      images: 'https://p1.pxfuel.com/preview/554/143/615/mango-mango-tree-fruits-fruit-royalty-free-thumbnail.jpg',
      title: 'Benginapalli Mangoes',
      sub_title: 'From Israt, Odisha',
      cancel_btn: 'Cancel',
      trackOrder_btn: 'Track Order',
      quantity: 'Quantity',
      unit: '200kg'
    },
    {
      images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX92NsxV3XYKvCaFEeHTWkxDvV45_9QMreoQ&usqp=CAU',
      title: 'Benginapalli Mangoes',
      sub_title: 'From Israt, Odisha',
      cancel_btn: 'Cancel',
      trackOrder_btn: 'Track Order',
      quantity: 'Quantity',
      unit: '200kg'
    },
    {
      images: 'http://www.pngmart.com/files/8/Mango-PNG-Image-Free-Download.png',
      title: 'Benginapalli Mangoes',
      sub_title: 'From Israt, Odisha',
      cancel_btn: 'Cancel',
      trackOrder_btn: 'Track Order',
      quantity: 'Quantity',
      unit: '200kg'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
