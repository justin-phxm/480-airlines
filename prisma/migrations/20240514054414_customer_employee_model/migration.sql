-- CreateTable
CREATE TABLE "Customer" (
    "isMember" BOOLEAN NOT NULL,
    "newsletter" BOOLEAN NOT NULL,
    "loungeDiscount" BOOLEAN NOT NULL,
    "address" TEXT NOT NULL,
    "onFlight" BOOLEAN NOT NULL,
    "flightCoupon" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Employee" (
    "userId" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_userId_key" ON "Customer"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_userId_key" ON "Employee"("userId");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
