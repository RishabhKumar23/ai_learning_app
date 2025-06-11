import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Click</Button>
      <UserButton />
    </div>
  );
}
