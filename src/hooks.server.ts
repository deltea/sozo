import { createSupabaseServerClient } from "@supabase/auth-helpers-sveltekit";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";
import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

export const supabase: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  });

  /**
   * Unlike `supabase.auth.getSession`, which is unsafe on the server because it
   * doesn't validate the JWT, this function validates the JWT by first calling
   * `getUser` and aborts early if the JWT signature is invalid.
   */
  event.locals.safeGetSession = async () => {
    const {
      data: { user },
      error,
    } = await event.locals.supabase.auth.getUser();
    if (error) return { session: null, user: null };

    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession();

    return { session, user };
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range" || name === "x-supabase-api-version"
    }
  });
}

const authorization: Handle = async ({ event, resolve }) => {
  if (event.url.pathname === "/login" || event.url.pathname === "/home") {
    const { session } = await event.locals.safeGetSession();
    if (session) {
      redirect(303, "/");
    }
  }

  if (event.url.pathname === "/") {
    const { session } = await event.locals.safeGetSession();
    if (!session) {
      redirect(303, "/home");
    }
  }

  return resolve(event);
}

export const handle: Handle = sequence(supabase, authorization);
