CREATE TABLE IF NOT EXISTS "public"."User" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "public"."Post" (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  content TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  "authorId" INTEGER NOT NULL,
  FOREIGN KEY ("authorId") REFERENCES "public"."User"(id)
);

CREATE TABLE IF NOT EXISTS "public"."Profile" (
  id SERIAL PRIMARY KEY NOT NULL,
  bio TEXT,
  "userId" INTEGER UNIQUE NOT NULL,
  FOREIGN KEY ("userId") REFERENCES "public"."User"(id)
);


CREATE TABLE IF NOT EXISTS "public"."Sport" (
  id VARCHAR(3) PRIMARY KEY NOT NULL,
  sport VARCHAR(255) NOT NULL,
  gender VARCHAR(255),
  olympic BOOLEAN
);

CREATE TABLE IF NOT EXISTS "public"."Athlete" (
  id SERIAL PRIMARY KEY NOT NULL,
  "espnId" INTEGER,
  "olympediaId" INTEGER,
  "firstName" VARCHAR(255),
  "lastName" VARCHAR(255),
  "nativeName" VARCHAR(255),
  sport VARCHAR(3) REFERENCES "public"."Sport" (id),
  description TEXT,
  "popScore" INTEGER,
  status VARCHAR(255),
  heritage VARCHAR(2) ARRAY,
  slug VARCHAR(255) UNIQUE NOT NULL
);

-- 3NF
CREATE TABLE IF NOT EXISTS "public"."FavoriteMoments" (
  id SERIAL PRIMARY KEY NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "userId" INTEGER REFERENCES "public"."User" (id),
  "athleteId" INTEGER REFERENCES "public"."Athlete" (id),
  description TEXT,
  url TEXT
);
