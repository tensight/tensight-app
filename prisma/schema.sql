CREATE TABLE "public"."User" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE "public"."Post" (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  content TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  "authorId" INTEGER NOT NULL,
  FOREIGN KEY ("authorId") REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."Profile" (
  id SERIAL PRIMARY KEY NOT NULL,
  bio TEXT,
  "userId" INTEGER UNIQUE NOT NULL,
  FOREIGN KEY ("userId") REFERENCES "public"."User"(id)
);

CREATE TABLE "public"."Athlete" (
  id SERIAL PRIMARY KEY NOT NULL,
  "firstName" VARCHAR(255),
  "lastName" VARCHAR(255),
  "nativeName" VARCHAR(255),
  description TEXT,
  "popScore" INTEGER,
  status VARCHAR(255)
);

CREATE TABLE "public"."Sport" (
  id SERIAL PRIMARY KEY NOT NULL,
  sport VARCHAR(255) NOT NULL,
  gender VARCHAR(255),
  olympic BOOLEAN
);

-- 3NF
CREATE TABLE "public"."AthleteHeritage" (
  "athleteId" INTEGER NOT NULL,
  "countryId" VARCHAR(2) NOT NULL,
  FOREIGN KEY ("athleteId") REFERENCES "public"."Athlete"(id),
  PRIMARY KEY ("athleteId", "countryId")
);

CREATE TABLE "public"."FavoriteMoments" (
  id SERIAL PRIMARY KEY NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "userId" INTEGER REFERENCES "public"."User" (id),
  "athleteId" INTEGER REFERENCES "public"."Athlete" (id),
  description TEXT,
  url TEXT
);
