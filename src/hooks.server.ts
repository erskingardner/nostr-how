import { redirects } from "$lib/data/redirects";
import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    redirects.forEach((redirection) => {
        const pattern = new RegExp(`^${redirection.old}/?$`, "gi");
        if (event.url.pathname.match(pattern)) throw redirect(301, redirection.new);
    });

    return resolve(event);
};
