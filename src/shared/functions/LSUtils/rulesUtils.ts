import { LOCAL_STORAGE_KEYS } from './LSKeys';

const RULES_SEEN_KEY = LOCAL_STORAGE_KEYS.rulesSeenKey;
/**
 * Проверяет, видел ли пользователь правила игры
 */
function hasUserSeenRules(): boolean {
  return localStorage.getItem(RULES_SEEN_KEY) === 'true';
}

/**
 * Устанавливает флаг, что пользователь видел правила игры
 */
function setUserSeenRules(): void {
  localStorage.setItem(RULES_SEEN_KEY, 'true');
}

export { hasUserSeenRules, setUserSeenRules };
