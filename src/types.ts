import type { User } from "@supabase/supabase-js";
export type ChatContext = {
  Variables: {
    user: User;
  };
};