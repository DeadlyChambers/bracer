import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DesignModule } from '../design/design.module';
import { CreateAgentComponent } from './create/create-agent.component';
import { AgentDashboardComponent } from './dashboard/agent-dashboard.component';
import { EditAgentComponent } from './edit/edit-agent.component';
import { OrderComponent } from './order/order.component';
import { AgentAccountFormComponent } from './account-form/agent-account-form.component';

@NgModule({
  declarations: [
    CreateAgentComponent,
    EditAgentComponent,
    AgentDashboardComponent,
    OrderComponent,
    AgentAccountFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DesignModule
  ]
})
export class AgentModule { }
