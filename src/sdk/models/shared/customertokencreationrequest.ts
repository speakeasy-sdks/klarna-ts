/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Customer } from "./customer";
import { Expose, Type } from "class-transformer";

/**
 * Intended use for the token.
 */
export enum CustomerTokenCreationRequestIntendedUseEnum {
  Subscription = "SUBSCRIPTION",
}

export class CustomerTokenCreationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "billing_address" })
  @Type(() => Address)
  billingAddress?: Address;

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => Customer)
  customer?: Customer;

  /**
   * Description of the purpose of the token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  /**
   * Intended use for the token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "intended_use" })
  intendedUse: CustomerTokenCreationRequestIntendedUseEnum;

  /**
   * RFC 1766 customer's locale.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "locale" })
  locale: string;

  /**
   * ISO 3166 alpha-2 purchase country.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "purchase_country" })
  purchaseCountry: string;

  /**
   * ISO 4217 purchase currency.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "purchase_currency" })
  purchaseCurrency: string;
}