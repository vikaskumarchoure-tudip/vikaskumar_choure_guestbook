import { Component, OnInit } from '@angular/core';
import { SharedData } from 'app/Shared-Data/shareddata';
import { DashService } from 'app/DashService/dash.service';
 
@Component({
    selector: 'dashboard-comp',
    templateUrl: 'app/Dashboard-Form/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    datas : any = [];

    constructor(private dash_data: DashService ) { }

    ngOnInit() {
        this.dash_data.getAllPosts().subscribe(datas => {
      this.datas = datas;
    });
    }
}
