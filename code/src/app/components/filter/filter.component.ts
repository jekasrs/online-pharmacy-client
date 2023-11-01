import {Component, Input} from "@angular/core";
import {filter} from "rxjs";
import {IFilter} from "../../models/filter";
import {IUser} from "../../models/user";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent
{
  @Input() user: IUser
  title = 'Filter'
}
