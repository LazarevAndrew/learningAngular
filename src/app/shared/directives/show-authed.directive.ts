import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Directive({ selector: '[artShowAuthed]' })
export class ShowAuthedDirective implements OnInit {
  private condition: boolean = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

  @Input() set artShowAuthed(condition: boolean) {
    this.condition = condition;
  }

}
