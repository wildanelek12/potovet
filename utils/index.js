import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export const cn = (...args) => twMerge(classNames(...args))
