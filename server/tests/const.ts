import { randomUUID } from 'crypto';
import type { JwtUser } from 'service/types';

export const DUMMY_USER: JwtUser = { sub: randomUUID(), user_metadata: { name: 'dummy user' } };
