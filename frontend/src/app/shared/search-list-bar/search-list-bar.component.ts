import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-list-bar',
  templateUrl: './search-list-bar.component.html',
  styleUrls: ['./search-list-bar.component.scss']
})
export class SearchListBarComponent implements OnInit {
  @Output('onSelect') onSelect: EventEmitter<string> = new EventEmitter();
  @Output('onLoad') onLoad: EventEmitter<void> = new EventEmitter();
  @Input() suggestions: [] = [];
  @ViewChild('search') inputSearch;

  debouncer: Subject<string> = new Subject();
  showSuggestions = true;

  constructor() { }

  ngOnInit(): void {
  }

  selectSuggestion(term: string) {
    this.suggestions = [];
    this.showSuggestions = false;
    this.inputSearch.nativeElement.value = term;
    this.onSelect.emit(term);
  }

  loadSuggestions(){
    this.showSuggestions = true;
    this.onLoad.emit();
  }

}
