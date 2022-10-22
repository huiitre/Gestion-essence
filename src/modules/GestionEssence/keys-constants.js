export const vehicleQueryKey = {
  base: ['vehicle'],
  list: () => [...vehicleQueryKey.base, 'list']
}

export const fuelQueryKey = {
  base: ['fuel'],
  list: () => [...fuelQueryKey.base, 'list']
}

export const transactionQueryKey = {
  base: ['transaction'],
  create: () => [...transactionQueryKey.base, 'create']
}