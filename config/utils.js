import tsPlugin from '@typescript-eslint/eslint-plugin'

const { configs } = tsPlugin

export const tsRecommendedTypeCheckedRules = configs['recommended-type-checked'].rules

export const tsStrictTypeCheckedRules = configs['strict-type-checked'].rules

export const tsDisableTypeCheckedRules = configs['disable-type-checked'].rules
