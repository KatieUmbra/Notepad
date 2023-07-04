import { Component } from '@angular/core';
import { appWindow } from '@tauri-apps/api/window'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  close() {
    appWindow.close()
  }
}
