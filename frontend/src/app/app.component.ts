import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _iconRegistry: MatIconRegistry,
    private _sanitizer: DomSanitizer
  ) {
    // Register all required SVG-icons, for usage in mat-icon
    this.initIcons();
  }

  /** Registers all required SVG-icons for the whole application */
  private initIcons() {
    // Material icons
    this.registerIcons('material', [
      'outline-arrow_back',
      'outline-close'
    ]);
  }

  /** Registers one icon for a namespace. Requires the svg to be under "assets/icons/${namespace}/${name}.svg" */
  private registerIcon(namespace: string, name: string) {
    const url = `assets/icons/${namespace}/${name}.svg`;
    this._iconRegistry.addSvgIconInNamespace(namespace, name, this._sanitizer.bypassSecurityTrustResourceUrl(url));
  }

  /** Registers many icons in one namespace. Requires the svg to be under "assets/icons/${namespace}/${name}.svg" */
  private registerIcons(namespace: string, names: string[]) {
    names.forEach(name => this.registerIcon(namespace, name));
  }
}
