import { Component, NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Compoennt } from './component/error-404/error-404.component';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        RouterModule.forChild ([
             {
                 path:'**',  component: Error404Compoennt
             }
        ])
    
        
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule { 

}
