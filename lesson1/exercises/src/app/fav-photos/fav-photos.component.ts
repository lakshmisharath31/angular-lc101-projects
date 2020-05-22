import { Component, OnInit } from '@angular/core';
declare var require : any

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = require("src/assets/img/img.png")
  image3 = require("src/assets/img/pencil.gif")
  image4 = require("src/assets/img/bfly.png")
  constructor() { }

  ngOnInit() {
  }

}