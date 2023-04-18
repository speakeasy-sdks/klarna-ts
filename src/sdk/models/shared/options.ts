/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Options extends SpeakeasyBase {
  /**
   * Color for the border of elements within the iFrame. Value should be a CSS hex color, e.g. "#FF9900"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "color_border" })
  colorBorder?: string;

  /**
   * Color for the border of elements within the iFrame when selected by the customer. Value should be a CSS hex color, e.g. "#FF9900"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "color_border_selected" })
  colorBorderSelected?: string;

  /**
   * Color for the bullet points within the iFrame. Value should be a CSS hex color, e.g. "#FF9900"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "color_details" })
  colorDetails?: string;

  /**
   * Color for the texts within the iFrame. Value should be a CSS hex color, e.g. "#FF9900"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "color_text" })
  colorText?: string;

  /**
   * Radius for the border of elements within the iFrame.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "radius_border" })
  radiusBorder?: string;
}
