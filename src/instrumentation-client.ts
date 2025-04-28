// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b06d8a387066b9457bdde851886c2bfa@o4508392611774464.ingest.us.sentry.io/4508392654962688",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});