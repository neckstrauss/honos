import {MessageComponent} from './message.component';
import {NgModule, ErrorHandler} from "@angular/core";
import {MessageService} from "./message.service";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MessageComponent],
  exports: [MessageComponent],
  providers: [MessageService]
})
export class MessageModule {}