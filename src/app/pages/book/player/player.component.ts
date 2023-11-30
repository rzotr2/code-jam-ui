import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements AfterViewInit {
  @ViewChild('draggablePoint') draggablePoint: ElementRef;
  @ViewChild('audioProgressBar') audioProgressBar: ElementRef

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    $(this.draggablePoint.nativeElement).draggable({
      axis: 'x',
      containment: "#audio-progress",
      drag: () => {
        const offset = $(this.draggablePoint.nativeElement).offset();
        const xPos = (100 * parseFloat($(this.draggablePoint.nativeElement).css("left"))) / (parseFloat($(this.draggablePoint.nativeElement).parent().css("width"))) + "%";

        this.renderer.setStyle(this.audioProgressBar.nativeElement, 'width', xPos);
      }});
  }
}
