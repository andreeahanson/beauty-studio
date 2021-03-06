import { dataCleanup } from "./dataCleaner";

describe("dataCleanup", () => {
  it("should reorganize makeup objects when pushed through dataCleaner", () => {
    const uncleanMakeup = [
      {
        id: 1001,
        brand: "glossier",
        name: "Haloscope",
        price: "27.0",
        price_sign: "$",
        currency: "USD",
        image_link:
          "https://static-assets.glossier.com/production/spree/images/attachments/000/001/109/portrait_normal/Haloscope_01-compressor.jpg?1498613775",
        product_link: "https://www.glossier.com/products/haloscope",
        website_link: "https://www.glossier.com",
        description:
          "Skincare + makeup = Haloscope, the galaxy’s first dew effect highlighter. It’s a dual-delivery formula: the outer halo is infused with genuine crystal extracts for all-day enlightenment, with a solid oil core of vitamin-rich moisturizers for a hydrated, dewy finish. Expect an otherworldly sheen that’s never dry, never glittery. Comes in…",
        rating: null,
        category: "highlighter",
        product_type: "foundation",
        tag_list: [],
        created_at: "2017-12-27T02:44:12.059Z",
        updated_at: "2017-12-27T02:58:27.019Z",
        product_api_url:
          "http://makeup-api.herokuapp.com/api/v1/products/1001.json",
        api_featured_image:
          "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/001/original/open-uri20171227-4-1das33x?1514342770",
        product_colors: [
          {
            hex_value: "#F0EDEB",
            colour_name: "Moonstone"
          },
          {
            hex_value: "#FBE9E1",
            colour_name: "Quartz"
          },
          {
            hex_value: "#D19668",
            colour_name: "Topaz"
          }
        ]
      }
    ];

    const expected = [
      {
        id: 1001,
        brand: "glossier",
        name: "Haloscope",
        price: "27.0",
        image_link:
          "https://static-assets.glossier.com/production/spree/images/attachments/000/001/109/portrait_normal/Haloscope_01-compressor.jpg?1498613775",
        product_link: "https://www.glossier.com/products/haloscope",
        description:
          "Skincare + makeup = Haloscope, the galaxy’s first dew effect highlighter. It’s a dual-delivery formula: the outer halo is infused with genuine crystal extracts for all-day enlightenment, with a solid oil core of vitamin-rich moisturizers for a hydrated, dewy finish. Expect an otherworldly sheen that’s never dry, never glittery. Comes in…",
        rating: null,
        product_type: "foundation",
        tag_list: [],
        created_at: "2017-12-27T02:44:12.059Z",
        product_colors: [
          {
            hex_value: "#F0EDEB",
            colour_name: "Moonstone"
          },
          {
            hex_value: "#FBE9E1",
            colour_name: "Quartz"
          },
          {
            hex_value: "#D19668",
            colour_name: "Topaz"
          }
        ]
      }
    ];

    const result = dataCleanup(uncleanMakeup);

    expect(result).toEqual(expected);
  });
});
