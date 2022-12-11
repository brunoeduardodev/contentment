-- CreateTable
CREATE TABLE "_PostToPostCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PostToPostCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PostToPostCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "PostCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PostCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "postId" TEXT
);
INSERT INTO "new_PostCategory" ("createdAt", "id", "name", "postId", "slug", "updatedAt") SELECT "createdAt", "id", "name", "postId", "slug", "updatedAt" FROM "PostCategory";
DROP TABLE "PostCategory";
ALTER TABLE "new_PostCategory" RENAME TO "PostCategory";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_PostToPostCategory_AB_unique" ON "_PostToPostCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToPostCategory_B_index" ON "_PostToPostCategory"("B");
