import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Single File Input',
    to: { name: 'single-file-input' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Multiple File Input',
    to: { name: 'multi-file-input' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Dropzone File Input',
    to: { name: 'dropzone-file-input' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Simple Data Table',
    to: { name: 'simple-data-table' },
    icon: { icon: 'tabler-table' },
  },
  {
    title: 'Resizable Data Table',
    to: { name: 'resizable-data-table' },
    icon: { icon: 'tabler-table' },
  },
] as VerticalNavItems
