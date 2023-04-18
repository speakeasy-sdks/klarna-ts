/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Attachment } from "./attachment";
import { CustomerRead } from "./customerread";
import { MerchantUrls } from "./merchanturls";
import { Options } from "./options";
import { OrderLine } from "./orderline";
import { PaymentMethodCategory } from "./paymentmethodcategory";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.
 */
export enum SessionReadAcquiringChannelEnum {
  Ecommerce = "ECOMMERCE",
  InStore = "IN_STORE",
  Telesales = "TELESALES",
}

/**
 * Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.
 */
export enum SessionReadIntentEnum {
  Buy = "buy",
  Tokenize = "tokenize",
  BuyAndTokenize = "buy_and_tokenize",
}

/**
 * The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.
 */
export enum SessionReadStatusEnum {
  Complete = "complete",
  Incomplete = "incomplete",
}

/**
 * successful operation
 */
export class SessionRead extends SpeakeasyBase {
  /**
   * The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "acquiring_channel" })
  acquiringChannel?: SessionReadAcquiringChannelEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "attachment" })
  @Type(() => Attachment)
  attachment?: Attachment;

  /**
   * Authorization token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "authorization_token" })
  authorizationToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "billing_address" })
  @Type(() => Address)
  billingAddress?: Address;

  /**
   * Token to be passed to the JS client
   */
  @SpeakeasyMetadata()
  @Expose({ name: "client_token" })
  clientToken?: string;

  /**
   * Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "custom_payment_method_ids" })
  customPaymentMethodIds?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "customer" })
  @Type(() => CustomerRead)
  customer?: CustomerRead;

  /**
   * Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "design" })
  design?: string;

  /**
   * Session expiration date
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expires_at" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  expiresAt?: Date;

  /**
   * Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "intent" })
  intent?: SessionReadIntentEnum;

  /**
   * Used to define the language and region of the customer. The locale follows the format of [RFC 1766](https://datatracker.ietf.org/doc/rfc1766/), meaning its value consists of language-country.
   *
   * @remarks
   * Read more on **[Supported Locals and Currencies](https://docs.klarna.com/klarna-payments/in-depth-knowledge/puchase-countries-currencies-locales/)**.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "locale" })
  locale?: string;

  /**
   * Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "merchant_data" })
  merchantData?: string;

  /**
   * Used for storing merchant's internal order number or other reference.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "merchant_reference1" })
  merchantReference1?: string;

  /**
   * Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "merchant_reference2" })
  merchantReference2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "merchant_urls" })
  @Type(() => MerchantUrls)
  merchantUrls?: MerchantUrls;

  @SpeakeasyMetadata()
  @Expose({ name: "options" })
  @Type(() => Options)
  options?: Options;

  /**
   * Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "order_amount" })
  orderAmount?: number;

  /**
   * The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.
   */
  @SpeakeasyMetadata({ elemType: OrderLine })
  @Expose({ name: "order_lines" })
  @Type(() => OrderLine)
  orderLines?: OrderLine[];

  /**
   * Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "order_tax_amount" })
  orderTaxAmount?: number;

  /**
   * Available payment method categories
   */
  @SpeakeasyMetadata({ elemType: PaymentMethodCategory })
  @Expose({ name: "payment_method_categories" })
  @Type(() => PaymentMethodCategory)
  paymentMethodCategories?: PaymentMethodCategory[];

  /**
   * The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "purchase_country" })
  purchaseCountry?: string;

  /**
   * The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "purchase_currency" })
  purchaseCurrency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "shipping_address" })
  @Type(() => Address)
  shippingAddress?: Address;

  /**
   * The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: SessionReadStatusEnum;
}
