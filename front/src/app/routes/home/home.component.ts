import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ASN1, EncodingRule } from '@jlguenego/asn.1';
import { derDefault } from 'src/data/default';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  f = new FormGroup({
    der: new FormControl(derDefault),
    json: new FormControl(''),
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
}
