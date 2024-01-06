("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { cart } = ctx.request.body;
    console.log(cart);
    const lineItems = await Promise.all(
      cart.map(async (item) => {
        const product = await strapi
          .service("api::product.product")
          .findOne(item.id);

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      })
    );
    try {
      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["BG", "US", "CA"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}?canceled=false`,
        line_items: lineItems,
      });
      await strapi.service("api::order.order").create({
        data: {
          cart,
          stripeId: session.id,
        },
      });
      return { stripeSession: session };
    } catch (err) {
      console.error(err)
      ctx.response.status = 500;
      return err;
    }
  },
}));
