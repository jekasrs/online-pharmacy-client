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

  showItems()
  {
    return this.searchRequest;
  }
}
