import { createClient } from "redis";

console.log(import.meta.env.REDIS_URL);

export const redis = createClient({
  url: import.meta.env.REDIS_URL,
});

redis.connect();
