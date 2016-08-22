// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// APP
import { NovoRadioModule } from './../radio/Radio.module';
import { NovoTilesModule } from './../tiles/Tiles.module';
import { NovoSelectModule } from './../select/Select.module';
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoChipsModule } from './../chips/Chips.module';
import { NovoDatePickerModule } from './../date-picker/DatePicker.module';
import { NovoTimePickerModule } from './../time-picker/TimePicker.module';
import { NovoNovoCKEditorModule } from './../ckeditor/CKEditor.module';
import { NovoQuickNoteModule } from './../quick-note/QuickNote.module';
import { NovoDynamicFormElement } from './DynamicForm';
import { NovoFormElement } from './Form';
import { NovoControlElement } from './Control';
import { NovoFormExtrasModule } from './extras/FormExtras.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NovoRadioModule,
        NovoTilesModule,
        NovoSelectModule,
        NovoPickerModule,
        NovoChipsModule,
        NovoDatePickerModule,
        NovoTimePickerModule,
        NovoNovoCKEditorModule,
        NovoFormExtrasModule,
        NovoQuickNoteModule
    ],
    declarations: [NovoControlElement, NovoDynamicFormElement, NovoFormElement],
    exports: [NovoDynamicFormElement, NovoControlElement, NovoFormElement]
})
export class NovoFormModule {
}
