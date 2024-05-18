// See https://kit.svelte.dev/docs/types#app

import type { Database } from "$lib/database.types";
import type { Session, User, SupabaseClient } from "@supabase/supabase-js";

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
      supabase: SupabaseClient<Database>;
      safeGetSession(): Promise<{
        session: Session | null;
        user: User | null;
      }>
    }
		interface PageData {
      session: Session | null;
      user: User | null;
    }
		// interface Error {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
