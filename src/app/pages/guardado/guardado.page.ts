import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPolizas } from 'src/app/interfaces/polizas';
import { PolizasService } from 'src/app/services/polizas.service';

@Component({
  selector: 'app-guardado',
  templateUrl: 'guardado.page.html',
  styleUrls: ['guardado.page.scss']
})
export class GuardadoPage implements OnInit {

  public polizas: IPolizas[] = [];
  constructor(private polizasService: PolizasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.getPolizas()
    });
  }

  reload() {
    this.getPolizas()
  }

  getPolizas() {
    this.polizasService.getPolizas().subscribe(data => {
      this.polizas = data
    })
  }

  delete(id: string) {
    this.polizasService.delete(id).subscribe(data => {
      if (data)
        this.reload()
    })
  }
}
