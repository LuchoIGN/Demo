import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/content/search/search.component';
import { CompletionComponent } from './components/content/completion/completion.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    children:
      [
        {
          path:'',
          component:SearchComponent
        },
        {
          path:'cart',
          component:CompletionComponent
        }
      ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
