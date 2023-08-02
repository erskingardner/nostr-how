import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { redirects } from '$lib/data/redirects';

export const handle: Handle = async ({ event, resolve }) => {
    redirects.forEach((redirection) => {
        if (event.url.pathname === redirection.old) throw redirect(301, redirection.new);
    });

    return resolve(event);
};
