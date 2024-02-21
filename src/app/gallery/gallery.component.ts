import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../models/ImageModel';
import { UploadService } from '../services/upload.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatIconModule}  from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {

  constructor(private uploadservice:UploadService,
              private _snackBar: MatSnackBar) { }

  images= new Array<ImageModel>();

  ngOnInit() {
    
    // Copy localstorage to variable
    if (true){
      //if (localStorage.getItem("images")!=null){
     // this.images=JSON.parse(localStorage.getItem("images"));
    }
    else{
      console.log("Nothing in localstorage");
    }
    console.log(this.images);

  }


  // Add image to localstorage
  addImage(id:any){
    this.uploadservice.getImage(id).subscribe((ret)=>{
      let temp=ret;
      this.images.push(temp);
     // localStorage.setItem('images',JSON.stringify(this.images));
    })
  }

  //Remove Image from localstorage
  removeImage(image:ImageModel){
    //console.dir(image);
    //this.images.splice(this.images.indexOf(image),1);
    this.images= this.images.filter(obj => obj !== image);
    localStorage.setItem('images',JSON.stringify(this.images));
  }

  // Update Gallery
  update(event:any){
    this.addImage(event);
    window.scrollTo(0,500);
  }


  // Copy URL of image
  copy(text:string){
    navigator.clipboard.writeText(text);
  }

  //Handling snackbar when remove image
  openSnackBar(image:ImageModel) {
      let snackbar= this._snackBar.open("Are you sure?", "Yeah",  {
      duration: 2500,
      panelClass: ['snackbar']
    });

    snackbar.afterDismissed().subscribe((info)=>{
      if (info.dismissedByAction === true) {
        this.removeImage(image);
      }
      
    })
  }
}
