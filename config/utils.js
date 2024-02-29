import tsPlugin from '@typescript-eslint/eslint-plugin'

const { configs } = tsPlugin

/** @type {import('@typescript-eslint/utils').TSESLint.ClassicConfig.RulesRecord} */
export const tsRecommendedTypeCheckedRules = configs['recommended-type-checked'].rules

/** @type {import('@typescript-eslint/utils').TSESLint.ClassicConfig.RulesRecord} */
export const tsStrictTypeCheckedRules = configs['strict-type-checked'].rules

/** @type {import('@typescript-eslint/utils').TSESLint.ClassicConfig.RulesRecord} */
export const tsDisableTypeCheckedRules = configs['disable-type-checked'].rules
