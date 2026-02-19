const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Testing Prisma v5 connection...');
    
    // Test the connection
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✓ Prisma v5 is working!');
    console.log('Database connection successful:', result);
    
  } catch (error) {
    console.error('✗ Prisma connection error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
