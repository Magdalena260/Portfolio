import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './infos.html',
  styleUrl: './infos.scss'
})
export class InfosComponent implements AfterViewInit {

  @ViewChild('infoSection') infoSection!: ElementRef;
  @ViewChild('arrow') arrow!: ElementRef;

  ngAfterViewInit() {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          this.arrow.nativeElement.classList.add('active');
        } else {
          this.arrow.nativeElement.classList.remove('active');
        }

      });
    }, {
      threshold: 0.4
    });

    observer.observe(this.infoSection.nativeElement);
  }
}