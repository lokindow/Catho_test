import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastService, ToastOptions, AMBTableDataSource, AMBModalDialogComponent } from '@amb/components-angular';
import { Router } from '@angular/router';


@Component({
    selector: 'check',
    templateUrl: './check.component.html',
    styleUrls: ['../../main.component.scss', './check.component.scss']
})

export class CheckComponent {

    @ViewChild('confirmModal') modalDialog: AMBModalDialogComponent;

    public selectE : boolean = true; 
    public title: string = 'CONFIRMATION';


    constructor(private elementRef: ElementRef, private toastService: ToastService, private router: Router) {
    }

    public back() {
        this.router.navigate(['/product']);
    }
    public confirm(){
        this.modalDialog.open();
        this.selectE = false;
    }
}

