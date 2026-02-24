import {roleHeader} from './roleHeader'
import {attachmentsHeader} from './attachmentsHeader'

export class Header {

  constructor() {
    this.roleHeader = new roleHeader();
    this.attachmentsHeader = new attachmentsHeader();

  }
}