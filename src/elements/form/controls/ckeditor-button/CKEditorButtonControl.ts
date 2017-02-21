// NG2
import { Component, OnInit, Input } from '@angular/core';
// APP
import { BaseControl, NovoControlConfig } from './../BaseControl';

@Component({
    selector: 'custom-ckeditor-control',
    template: 'I AM A CUSTOM CONTROL'
})
export class CustomCKEditorControl implements OnInit {
    @Input() form: any;
    @Input() control: any;

    ngOnInit() {
        console.log('HERE', this.form, this.control);
    }
}

export class CKEditorButtonControl extends BaseControl {
    controlType = 'custom';

    constructor(config: NovoControlConfig) {
        super(config);
    }
}
