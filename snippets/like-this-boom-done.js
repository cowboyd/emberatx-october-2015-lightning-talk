function fetchColors(pageOffset, pageSize) {
  return this.store.find('color', {page: pageOffset, perPage: pageSize});
}
