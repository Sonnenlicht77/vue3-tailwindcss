export const formatRouterPath = (path: string): string => {
  const arrStr = path.split('')
  const firstStr = arrStr[0].toUpperCase()
  const newpath = firstStr + arrStr.join('').slice(1) + 'Page'
  return newpath
}
