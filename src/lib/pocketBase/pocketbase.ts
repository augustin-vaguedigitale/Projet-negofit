import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.PB_URL || "http://127.0.0.1:8090");

// Auth admin (si nécessaire pour les routes sécurisées)
if (process.env.PB_ADMIN_EMAIL && process.env.PB_ADMIN_PASSWORD) {
  pb.admins.authWithPassword(
    process.env.PB_ADMIN_EMAIL,
    process.env.PB_ADMIN_PASSWORD
  ).catch((err) => {
    console.error("PocketBase admin login failed:", err);
  });
}

export default pb;
