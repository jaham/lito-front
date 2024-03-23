import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPolizas } from 'src/app/interfaces/polizas';
import { PhotoService } from 'src/app/services/photo.service';
import { PolizasService } from 'src/app/services/polizas.service';

@Component({
  selector: 'app-polizas',
  templateUrl: 'polizas.page.html',
  styleUrls: ['polizas.page.scss']
})
export class PolizasPage {

  step = 1
  serverImgPath = ""
  registerForm: FormGroup;

  constructor(private polizasService: PolizasService, private formBuilder: FormBuilder, public photoService: PhotoService) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
    });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async sentPhoto() {
    const photoFile = await this.photoService.convertirArchivoAClaseFile(this.photoService.photo.webviewPath)
    this.polizasService.sentPhoto(photoFile).subscribe(data => {
      this.step = 2;
      this.serverImgPath = data.path
    })
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const newPoliza: IPolizas = {
        ...this.registerForm.value,
        logo: this.serverImgPath
      }
      this.polizasService.create(newPoliza).subscribe(data => {

      })
    }
  }

}
