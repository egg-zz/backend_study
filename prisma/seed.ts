import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const restaurants = [
    {
      name: '면식당',
      address: '경기도 수원시 장안구 서부로2106번길 18',
      phone: '031-295-0610',
    },
    {
      name: '합',
      address: '경기도 수원시 장안구 서부로2105번길 26-4 2층',
      phone: '031-987-6543',
    },
    {
      name: '수해복마라탕',
      address: '경기도 수원시 장안구 율전동 번지 1층 433-88',
      phone: '031-298-1004',
    },
    {
      name: '짱식당',
      address: '경기도 수원시 장안구 율천동 276-5',
      phone: '031-268-0277',
    },
    {
      name: '무대뽀핫도그',
      address: '경기도 수원시 장안구 율전동 290-14',
      phone: '031-123-4567',
    },
    {
      name: '백사104',
      address: '경기도 수원시 장안구 율전동 433-80',
      phone: '070-4007-1912',
    },
    {
      name: '본찌돈까스',
      address: '경기도 수원시 장안구 율천동 서부로2106번길 22',
      phone: '031-297-1001',
    },
    {
      name: '새맛집',
      address: '경기 수원시 어디 1-2',
      phone: '031-000-0055',
    },
    {
      name: '봉수육',
      address: '경기 수원시 장안구 율전로108번길 11 1층',
      phone: '0507-1460-0903',
    },
  ];

  for (const r of restaurants) {
    await prisma.restaurant.upsert({
      where: { name: r.name },
      update: {},
      create: r,
    });
  }

  console.log('Seed 완료!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
