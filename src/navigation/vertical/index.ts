import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'File Input',
    to: { name: 'file-input' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Data Table',
    to: { name: 'data-table' },
    icon: { icon: 'tabler-table' },
  },
] as VerticalNavItems
