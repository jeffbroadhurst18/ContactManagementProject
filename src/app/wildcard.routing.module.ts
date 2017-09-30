import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFound } from './app.not-found.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '**',
                component: NotFound
            }
        ])
    ],
    declarations: [
        NotFound
    ],
    exports: [
        RouterModule
    ]
})
export class WildcardRoutingModule { }