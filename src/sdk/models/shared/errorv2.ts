/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AuthorizedPaymentMethod } from "./authorizedpaymentmethod";
import { Expose, Type } from "class-transformer";

/**
 * We were unable to create a customer token with the provided data. Some field constraint was violated.
 */
export class ErrorV2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "authorized_payment_method" })
  @Type(() => AuthorizedPaymentMethod)
  authorizedPaymentMethod?: AuthorizedPaymentMethod;

  @SpeakeasyMetadata()
  @Expose({ name: "correlation_id" })
  correlationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "error_code" })
  errorCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "error_messages" })
  errorMessages?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "fraud_status" })
  fraudStatus?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;
}
