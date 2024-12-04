import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "byteflyDrive",
  access: (allow) => ({
    "uploads/movies/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
    "uploads/sounds/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
    "uploads/images/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
    "uploads/avatars/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
      allow.guest.to(["read"]),
      allow.authenticated.to(["read"])
    ],
    "free/movies/*": [
      allow.authenticated.to(["read"]),
    ],
    "free/sounds/*": [
      allow.authenticated.to(["read"]),
    ],
    "free/images/*": [
      allow.authenticated.to(["read"]),
    ],
    "subscribers/movies/*": [
      allow.groups(["subscribers"]).to(["read"]),
    ],
    "subscribers/sounds/*": [
      allow.groups(["subscribers"]).to(["read"]),
    ],
    "subscribers/images/*": [
      allow.groups(["subscribers"]).to(["read"]),
    ],
    "purchased/movies/*": [
      allow.groups(["purchasers"]).to(["read"]),
    ],
    "purchased/sounds/*": [
      allow.groups(["purchasers"]).to(["read"]),
    ],
    "purchased/images/*": [
      allow.groups(["purchasers"]).to(["read"]),
    ],
    "aiOutput/movies/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"])
    ],
    "aiOutput/sounds/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
    "aiOutput/images/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
    "posted/movies/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
      allow.authenticated.to(["read"]),
      allow.guest.to(["read"]),
    ],
    "posted/sounds/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
      allow.authenticated.to(["read"]),
      allow.guest.to(["read"]),
    ],
    "posted/images/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
      allow.authenticated.to(["read"]),
      allow.guest.to(["read"]),
    ],
  }),
});
