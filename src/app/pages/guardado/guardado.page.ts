import { Component, OnInit } from '@angular/core';
import { IPolizas } from 'src/app/interfaces/polizas';
import { PolizasService } from 'src/app/services/polizas.service';

@Component({
  selector: 'app-guardado',
  templateUrl: 'guardado.page.html',
  styleUrls: ['guardado.page.scss']
})
export class GuardadoPage implements OnInit {

  public polizas: IPolizas[] = [];
  constructor(private polizasService: PolizasService) { }

  ngOnInit() {
    this.polizasService.getPolizas().subscribe(data => {
      this.polizas = data
    })
  }
}
