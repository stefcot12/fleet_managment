export interface Snack {
  type: 'success' | 'danger' | 'warning' | 'info',
  message: string,
  duration?: number,
  icon?: string,
}
