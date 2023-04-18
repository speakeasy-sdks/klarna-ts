/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AssetUrls } from "./asseturls";
import { Expose, Type } from "class-transformer";

export class PaymentMethodCategory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "asset_urls" })
  @Type(() => AssetUrls)
  assetUrls?: AssetUrls;

  /**
   * ID of the payment method category to be used while loading the widget later.
   *
   * @remarks
   * The possible values are:<ul><li>klarna</li><li>pay_later</li><li>pay_now</li><li>pay_over_time</li><li>direct_bank_transfer</li><li>direct_debit</li></ul>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "identifier" })
  identifier?: string;

  /**
   * Name of the payment method category. These names are dynamic depending on what payment method is in the category. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated, or any updates of included payment methods by you.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
