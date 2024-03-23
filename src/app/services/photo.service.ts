import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
// import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photo: any;

  constructor() { }

  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    this.photo = {
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    };
    console.log(capturedPhoto)
    return capturedPhoto;
  }

  leerArchivoLocal(rutaArchivo: string): Promise<File> {

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', rutaArchivo);
      xhr.responseType = 'blob';

      xhr.onload = () => {
        if (xhr.status === 200) {
          const blob = new Blob([xhr.response], { type: 'image/jpeg' });
          const ext = 'jpg';
          const file = new File([blob], `imagen_${Date.now()}.${ext}`, { type: 'image/jpeg' });
          resolve(file);
        } else {
          reject('Error al leer el archivo');
        }
      };

      xhr.onerror = () => {
        reject('Error al leer el archivo');
      };

      xhr.send();
    });

  }

  async convertirArchivoAClaseFile(fileUri: string): Promise<File> {

    if (Capacitor.isNativePlatform())
      return await this.convertirArchivoAClaseFileForCapacitor(fileUri)

    else
      return await this.leerArchivoLocal(fileUri);
  }


  async convertirArchivoAClaseFileForCapacitor(fileUri: string) {
    const file = await Filesystem.readFile({
      path: fileUri,
      directory: Directory.Data
    });

    const blob = new Blob([file.data], { type: 'image/jpeg' });
    return new File([blob], 'photo.jpg', { type: 'image/jpeg' });
  }
}
