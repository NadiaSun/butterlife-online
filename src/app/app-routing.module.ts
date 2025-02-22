import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent, children: [
    {path: '', redirectTo: '/carevacuation', pathMatch: 'full'},
    {path: 'carevacuation', component: AppComponent},
    {path: 'catering', component: AppComponent},
    {path: 'firewood', component: AppComponent},
    {path: 'industrialmountaineering', component: AppComponent},
    {path: 'installationoffences', component: AppComponent},
    {path: 'pavingslabs', component: AppComponent},
    {path: 'translationagency', component: AppComponent},
    {path: 'waterproofingworks', component: AppComponent},
    {path: 'weldingworks', component: AppComponent},
    {path: '**', redirectTo: '/carevacuation', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
