import {FormControl, FormGroup, Validators} from "@angular/forms";

export class GenericoFormControl extends FormControl {

  label: string;
  modelProperty: string;
  readOnly: boolean;
  

  constructor(label: string, property: string, value: any, validator: any, readOnly: boolean = false, disabled: boolean = false) {
    super({value: value, disabled: disabled}, validator);
    this.label = label;
    this.modelProperty = property;
    this.readOnly = readOnly;
  }

  getValidationMessages() {
    let messages: string[] = [];

    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${this.label}`);
            break;
          case "minlength":
            messages.push(`A ${this.label} must be at least
${this.errors['minlength'].requiredLength} characters`);
            break;
          case "maxlength":
            messages.push(`A ${this.label} must be no more than
${this.errors['maxlength'].requiredLength} characters`);
            break;
          case "pattern":
            messages.push(`The ${this.label} contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }
}

export class GenericoFormGroup extends FormGroup {
  constructor(controls: {
    [key: string]: GenericoFormControl;
  }) {
    super(controls);
  }

  get genericosControls(): GenericoFormControl[] {
    return Object.keys(this.controls)
      .map(k => this.controls[k] as GenericoFormControl);
  }

  getFormValidationMessages(form: any): string[] {
    let messages: string[] = [];
    this.genericosControls.forEach(c => c.getValidationMessages()
      .forEach(m => messages.push(m)));
    return messages;
  }
}

