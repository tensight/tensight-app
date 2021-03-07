-- CreateTable
CREATE TABLE "account" (
    "id" SERIAL NOT NULL,
    "compound_id" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "provider_type" TEXT NOT NULL,
    "provider_id" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "access_token_expires" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "athlete" (
    "id" SERIAL NOT NULL,
    "espn_id" INTEGER,
    "olympedia_id" INTEGER DEFAULT 0,
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "native_name" VARCHAR(255),
    "sport" VARCHAR(3) NOT NULL,
    "description" TEXT,
    "pop_score" INTEGER,
    "status" VARCHAR(255),
    "heritage" VARCHAR(2)[],
    "slug" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "favorite_moment" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER,
    "athlete_id" INTEGER,
    "description" TEXT,
    "url" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "session_token" TEXT NOT NULL,
    "access_token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sport" (
    "id" VARCHAR(3) NOT NULL,
    "sport" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255),
    "olympic" BOOLEAN,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_favorite_moment" (
    "momentId" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "liked" BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY ("momentId","user_id")
);

-- CreateTable
CREATE TABLE "verification_request" (
    "id" SERIAL NOT NULL,
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account.compound_id_unique" ON "account"("compound_id");

-- CreateIndex
CREATE INDEX "providerAccountId" ON "account"("provider_account_id");

-- CreateIndex
CREATE INDEX "providerId" ON "account"("provider_id");

-- CreateIndex
CREATE INDEX "userId" ON "account"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "athlete.slug_unique" ON "athlete"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "session.session_token_unique" ON "session"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "session.access_token_unique" ON "session"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "user.email_unique" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verification_request.token_unique" ON "verification_request"("token");

-- AddForeignKey
ALTER TABLE "athlete" ADD FOREIGN KEY ("sport") REFERENCES "sport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite_moment" ADD FOREIGN KEY ("athlete_id") REFERENCES "athlete"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite_moment" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_moment" ADD FOREIGN KEY ("momentId") REFERENCES "favorite_moment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_favorite_moment" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
