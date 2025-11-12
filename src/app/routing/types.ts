import type { UserResponseDto } from 'shared/api';

export function assertUser(user: UserResponseDto | null): asserts user {
  if (!user) {
    throw new Error('Если статус authenticated то пользователь должен быть задан');
  }
}
