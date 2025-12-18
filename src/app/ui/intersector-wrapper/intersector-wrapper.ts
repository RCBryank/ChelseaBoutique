import { Component, computed, ElementRef, Signal, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-intersector-wrapper',
  template: '',
})
export class IntersectorWrapper {
  @ViewChild('ViewDetector', { static: true }) refViewDetector !: ElementRef;

  ValueThresold: number = 0;
  OnView = signal<boolean>(false);
  OnViewRead: Signal<boolean> = computed(() => this.OnView());

  private observer!: IntersectionObserver;


  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          this.OnView.set(true);
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: this.ValueThresold
    }
    );

    this.observer.observe(this.refViewDetector.nativeElement);
  }
}