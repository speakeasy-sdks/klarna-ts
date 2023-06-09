/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { CustomerReadCreateToken } from "./customerreadcreatetoken";
import { Expose, Type } from "class-transformer";

/**
 * Token was successfully created.
 */
export class CustomerTokenCreationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "billing_address" })
  @Type(() => Address)
  billingAddress?: Address;

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => CustomerReadCreateToken)
  customer?: CustomerReadCreateToken;

  /**
   * Used to connect customers with payment method when it is present.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "payment_method_reference" })
  paymentMethodReference?: string;

  /**
   * URL to redirect the customer to after placing the order. This is a Klarna URL where Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "redirect_url" })
  redirectUrl?: string;

  /**
   * Generated customer token. This token will be used to create a new order for the subscription using the Create a New order using token API.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "token_id" })
  tokenId: string;
}
