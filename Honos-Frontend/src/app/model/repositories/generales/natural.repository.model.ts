import {Model} from '../repository.model';
import {RestDataSource} from '../../dataSources/rest.datasource';
import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {MessageService} from '../../../shared/messages/message.service';
import { Natural } from '../../entities/generales/natural.model';
import {HttpEventType} from '@angular/common/http';

@Injectable()
export class NaturalModel extends Model<Natural> {

  constructor(private ds: RestDataSource, message: MessageService) {
    super(ds, message, environment.url + "honos/generales/naturales");
  }
  
  newObject(): Natural {
    let o: Natural = new Natural();
    return o;
  }

}