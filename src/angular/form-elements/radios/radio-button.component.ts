import {Component, Input, EventEmitter, Output} from '@angular/core';
import {IOptionItem} from "./radio-button.model";

@Component({
    selector: "sdc-radio",
    templateUrl: './radio-button.component.html'
})

export class RadioButtonComponent {
    @Input() option: IOptionItem;
    @Output() checkedChange:EventEmitter<any> = new EventEmitter<any>();
    public toggleState(newValue:boolean) {
        this.checkedChange.emit(this.option.value);
    }
}