import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProcessFlowComponent} from './process-flow/process-flow.component';
import {BusModelComponent} from './bus-model/bus-model.component';
import {ReferencesComponent} from './references/references.component';

const routes: Routes = [
{
  path: '',
    component: ProcessFlowComponent,
},
{
  path: 'processFlow',
    component: ProcessFlowComponent,
},
{
  path: 'processBusModel',
    component: BusModelComponent,
},
{
  path: 'references',
    component: ReferencesComponent,
}


// BusModelComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
