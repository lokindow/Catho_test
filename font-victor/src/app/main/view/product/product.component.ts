import { OrderService } from './../../../service/order.service';
import { ProductService } from './../../../service/product.service';
import { RuleService } from './../../../service/rule.service';
import { ClientService } from './../../../service/client.service';
import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ToastService, AMBComboBoxComponent, AMBInputDateComponent, AMBTableDataSource, AMBModalDialogComponent } from '@amb/components-angular';
import { Router } from '@angular/router';
import { Type } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['../../main.component.scss', './product.component.scss']
})

export class ProductComponent {

    @ViewChild('empresa_modal') modalDialog: AMBModalDialogComponent;
    @ViewChild('confirm_modal') modalDialogConfirm: AMBModalDialogComponent;

    public selectE: boolean = false;
    public title: string = 'INDENTIFICAÇÃO';
    public titlee: string = 'COMPLETED';
    public itemSelecionado: any;
    private order = {};
    private id = 0;
    private subtotal = 0;
    public typeC = 0;
    public typeS = 0;
    public typeP = 0;
    public user: any;
    public price = 0;
    public total = 0;

    constructor(private router: Router, private ruleService: RuleService, private productService: ProductService, private orderService: OrderService) { }

    public empresa =
        [{ "id": 1, "nome": "Apple", "disabled": false },
        { "id": 2, "nome": "Unilever", "disabled": false },
        { "id": 3, "nome": "Nike", "disabled": false },
        { "id": 4, "nome": "Ford", "disabled": false }];


    public getItemSelecionado(model: any) {
        this.itemSelecionado = model;
        this.modalDialog.close();
        this.selectE = true;
    }

    // Adiciona um novo produto
    public async add(product_n) {
        let nameProduct = product_n;
        let nameClent = this.itemSelecionado.nome;
        this.price = await this.productService.consult(product_n).then(resp => { return resp.retorno.price }) - 0.01;
        let prefix = await this.ruleService.consult(this.itemSelecionado.id).then(resp => { return resp.retorno.prefix });
        let rules = await this.ruleService.consult(this.itemSelecionado.id).then(resp => { return resp.retorno.param });
        let obj = { [this.id++]: { nomeProduct: nameProduct, nameClent: nameClent, price: this.price, prefix: prefix, rules: rules } }
        Object.assign(this.order, obj);
        this.subtotal += this.price;
        if (product_n == "Classic") {
            this.typeC += 1;
        } else if (product_n == "Standout") {
            this.typeS += 1;
        } else if (product_n == "Premium") {
            this.typeP += 1;
        }
        this.rule(product_n);
    }
     // Remove um produto
    public async remove(product_n) {
        this.price = await this.productService.consult(product_n).then(resp => { return resp.retorno.price }) - 0.01;

        if (product_n == "Classic" && this.typeC >= 1) {
            this.typeC -= 1;
            this.subtotal -= this.price;
            this.total -= this.price;
        } else if (product_n == "Standout" && this.typeS >= 1) {
            this.typeS -= 1;
            this.subtotal -= this.price;
            this.total -= this.price;
        } else if (product_n == "Premium" && this.typeP >= 1) {
            this.typeP -= 1;
            this.subtotal -= this.price;
            this.total -= this.price;
        }
    }

    // Abri o modal de chekout
    public check() {
        // let param = JSON.stringify({ product: this.order, price: this.subtotal });
        // this.orderService.insert(param).then(resp => { console.log(resp) });
        this.modalDialogConfirm.open();
    }

    // Regras atreladas aos requisitos
    public rule(product_n) {
        const that = this;
        if (this.itemSelecionado.name != "Default") {
            this.ruleService.consult(this.itemSelecionado.id).then(resp => {
                Object.keys(resp.retorno).map(resposta => {
                    let parm = resp.retorno[resposta];
                    let p = JSON.parse(parm.param);

                    if (parm.prefix == 'DISCOUNT') {
                        if (p.product == product_n) {
                            that.total += p.value;
                            that.total -= that.price;
                        }
                    } if (parm.prefix == 'QUANTITY_DISCOUNT') {
                        if (p.product == product_n && that.typeP >= p.q) {
                            that.total += p.value;
                            that.total -= that.price;
                        }
                    } if (parm.prefix == 'TAKE_MORE_PAY') {
                        if (product_n == "Classic" && that.typeC == parm.take) {
                            that.total += 0;
                            that.total -= that.price;
                        }
                    }
                });
            });
        }
        this.total += this.price;
    }

    public back() {
        this.router.navigate(['/login']);
    }

    userC() {
        this.itemSelecionado = { name: "Default" }
        this.modalDialog.close();
        this.selectE = true;
    }

        // Adicionar Objeto
        // Object.assign()

        // Deletar objeto
        // delete teste.n;

        // For de objetos
        // Object.keys(teste).map(resp => { console.log(teste[resp].a) });

        // Consult retornando todos parametros e traformando em json
        // this.ruleService.consult(this.itemSelecionado.id).then(resp => {console.log(JSON.parse(resp.retorno.param))});

        // retornando só o prefix para regra
        // this.ruleService.consult(this.itemSelecionado.id).then(resp => {console.log(resp.retorno.prefix)});

        // Preço do produto
        // this.productService.consult(product_n).then(resp => {resp.retorno.price});
}




