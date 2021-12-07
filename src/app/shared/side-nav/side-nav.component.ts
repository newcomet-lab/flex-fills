import { Component, OnInit } from '@angular/core';
import * as SimpleBar from "simplebar";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.addEventListener("DOMContentLoaded", () => this.initialize());
  }

  initialize = () => {
    this.initializeSimplebar();
    this.initializeSidebarCollapse();
  }
  
  initializeSimplebar = () => {
    const simplebarElement : any = document.getElementsByClassName("js-simplebar")[0];
  
    if (simplebarElement) {
      const simplebarInstance = new SimpleBar(simplebarElement);
  
      /* Recalculate simplebar on sidebar dropdown toggle */
      const sidebarDropdowns = document.querySelectorAll(".js-sidebar [data-bs-parent]");
  
      sidebarDropdowns.forEach(link => {
        link.addEventListener("shown.bs.collapse", () => {
          simplebarInstance.recalculate();
        });
        link.addEventListener("hidden.bs.collapse", () => {
          simplebarInstance.recalculate();
        });
      });
    }
  }
  
  initializeSidebarCollapse = () => {
    const sidebarElement = document.getElementsByClassName("js-sidebar")[0];
    const sidebarToggleElement : any = document.getElementsByClassName("js-sidebar-toggle")[0];
    if (sidebarElement && sidebarToggleElement) {
      sidebarToggleElement.addEventListener("click", () => {
        sidebarElement.classList.toggle("collapsed");
        sidebarElement.addEventListener("transitionend", () => {
          window.dispatchEvent(new Event("resize"));
        });
      });
    } else {
      sidebarToggleElement.style.visibility = 'hidden';
    }
  }

}
