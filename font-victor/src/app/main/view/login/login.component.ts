import { OrderService } from './../../../service/order.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ToastService, AMBTableDataSource } from '@amb/components-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['../../main.component.scss', './login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private orderService: OrderService) {
  }

  private listagem = []

  public title: string = 'LOGIN';

  private user: string;
  private pass: string;

  public consult_login() {
    let count = 0;
    let pass = false;
    this.orderService.list().then(retorno => {
      let size = retorno.retorno.length;
      retorno.retorno.map(ret => {
        if (this.user === ret.client && this.pass === ret.password) {
          this.router.navigate(['/product']);
          pass = true;
        }
        count++;
        if (count >= size && pass === false) {
          alert("Usuario ou senha invalidos")
        }
      })
    })
  }

  ngOnInit() {
    var that = this;

  }
}
