import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { ASN1, EncodingRule, DEREncode } from '@jlguenego/asn.1';
import { asn1Default, asn1TypeDefault, derDefault } from 'src/data/default';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  f = new FormGroup({
    der: new FormControl(derDefault),
    json: new FormControl(''),
    asn1: new FormControl(asn1Default),
    type: new FormControl(asn1TypeDefault),
  });

  constructor() {}

  ngOnInit(): void {}

  parse(): void {
    console.log('parsexx');
    const result = ASN1.parseMsg(this.f.controls.der.value, {
      encodingRule: EncodingRule.DER,
      format: 'hex',
    });
    this.f.controls.json.setValue(JSON.stringify(result, null, 2));
  }

  validate(): void {
    console.log('validate');
    if (!this.f.controls.json.value) {
      this.parse();
    }
    const module = ASN1.getModuleFromStr(this.f.controls.asn1.value);
    const validatedMsg = ASN1.validate(
      module,
      JSON.parse(this.f.controls.json.value),
      this.f.controls.type.value
    );
    this.f.controls.json.setValue(JSON.stringify(validatedMsg, null, 2));
  }

  generate(): void {
    console.log('generate');
    const derMessage = DEREncode(JSON.parse(this.f.controls.json.value));
    this.f.controls.der.setValue(derMessage);
  }
}
