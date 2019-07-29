import { RouterModule, Routes } from '@angular/router';

//components
import {EntriesComponent} from './entries/entries.component';
import {NgModule} from '@angular/core';

//routes
const routes:Routes = [

    {path:'', component:EntriesComponent},
    {path:'entries', component:EntriesComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}