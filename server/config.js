const MONGO_ATLAS_PWD = "ZNYPlWYGhWcxIuYm";
const DB_NAME = "full_stack";
const mongo_url =
  "mongodb+srv://deno_survey:" +
  MONGO_ATLAS_PWD +
  "@cluster0.vj1zo.mongodb.net/" +
  DB_NAME +
  "?retryWrites=true&w=majority";
export const url = process.env.MONGODB_URI || mongo_url;
export const port = process.env.PORT || 9000;
