import {Component, Input} from "@angular/core";
import {IUser} from "../../models/user";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input() user: IUser
  title = 'Header'
  searchRequest: string = ''
  elseIfPharmacist: any;
  elseNormal: any;

  showItems() {
    return this.searchRequest;
  }
}
