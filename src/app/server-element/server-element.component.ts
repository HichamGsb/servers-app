import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() { }

  ngOnInit(): void {
    // console.log('Text Content of paragraph ' + this.paragraph.nativeElement.textContent);
    // -> Undefined à l'initialisation.
  }

  ngAfterContentInit(): void {
    console.log('Text Content of paragraph ' + this.paragraph.nativeElement.textContent);
  }

}
